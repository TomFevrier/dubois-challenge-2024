<script>
	import { scaleBand, scaleLinear } from 'd3-scale';
	import { max } from 'd3-array';

	import { Tooltip } from '$lib';
	import { format } from '$lib/utils';

	export let data;

	let width;
	$: height = width * 1.25;

	const padding = {
		top: 0,
		right: 0,
		bottom: 0,
		left: 45
	};

	const acresToHectares = (value) => value / 2.471;

	$: xScale = scaleLinear()
		.domain([0, max(data, (d) => d.value)])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleBand()
		.domain(data.map((d) => d.year))
		.range([padding.top, height - padding.bottom])
		.paddingInner(0.45);

	let hovered = null;
</script>

<div class='chart' bind:clientWidth={width}>
	{#if width}
		<svg {width} {height}>
			{#each data as d, i}
				{@const barWidth = xScale(d.value) - xScale(0)}
				<g
					class='bar'
					role='img'
					transform='translate({xScale(0)}, {yScale(d.year)})'
					on:mouseenter={() => {
						hovered = {
							datum: d,
							position: [xScale(0) + barWidth - yScale.bandwidth() * 0.5, yScale(d.year) + yScale.bandwidth() * 0.5]
						};
					}}
					on:mouseleave={() => hovered = null}
				>
					<rect
						width={barWidth}
						height={yScale.bandwidth()} />
					<text
						class='label'
						x={0}
						y={yScale.bandwidth() * 0.5}
					>
						{d.year}
					</text>
					{#if hovered?.datum.year !== d.year && (i === 0 || i === data.length - 1)}
						<text
							class='value'
							x={barWidth * 0.5}
							y={yScale.bandwidth() - 3}
						>
							{format(',d')(acresToHectares(d.value))}
						</text>
					{/if}
				</g>
			{/each}
		</svg>
		{#if hovered}
			<Tooltip
				x={hovered.position[0]}
				y={hovered.position[1]}
				{width}
				offset={0.5}
			>
				<h3>{hovered.datum.year}</h3>
				<h4>
					{format(',d')(acresToHectares(hovered.datum.value))} hectares
				</h4>
				<p style='text-align: center; justify-content: center;'>
					({format(',d')(hovered.datum.value)} acres)
				</p>
			</Tooltip>
		{/if}
	{/if}
</div>

<style lang='scss'>
	.chart {
		width: 100%;
		max-width: 600px;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		.bar {
			rect {
				fill: $crimson;
			}

			.label {
				dominant-baseline: middle;
				font-size: 18px;
				font-weight: 300;
				transform: translateX(-45px);

				@include sm {
					font-size: 16px;
					transform: translateX(-40px);
				}

				@include xs {
					font-size: 12px;
					transform: translateX(-30px);
				}
			}

			.value {
				text-anchor: middle;
				font: bold 16px 'B52-ULC';

				@include md {
					font-size: 14px;
				}

				@include sm {
					display: none;
				}
			}
		}
	}
</style>