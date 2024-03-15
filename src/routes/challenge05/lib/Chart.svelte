<script>
	import { scaleLinear } from 'd3-scale';
	import { sum } from 'd3-array';

	import { balancer } from '$lib/actions';

	export let data;

	let width;
	$: height = width * 2.8;

	const stackedData = data.map((d, i, array) => ({
		...d,
		offset: sum(array.slice(0, i), (d) => d.percentage)
	}));

	$: yScale = scaleLinear()
		.domain([0, 100])
		.range([0, height]);
</script>

<div class='chart-container'>
	<div class='legend'>
		{#each stackedData as d}
			<div class='legend-item' style='top: {yScale(d.offset)}px;'>
				<h3 class='label'>
					{d.label}
				</h3>
				<h4 class='description' use:balancer>
					{d.description}
				</h4>
			</div>
		{/each}
	</div>
	<div class='chart' bind:clientWidth={width}>
		{#if width}
			<svg {width} {height}>
				<g class='bar'>
					{#each stackedData as d}
						<g class='subbar {d.category}' transform='translate(0,{yScale(d.offset)})'>
							<rect
								{width}
								height={yScale(d.percentage)} />
							<text
								class='label'
								x={width * 0.5}
								y={yScale(d.percentage) * 0.5}
							>
								{d.percentage} %
							</text>
						</g>
					{/each}
				</g>
			</svg>
		{/if}
	</div>
</div>

<style lang='scss'>
	.chart-container {
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: row;
		justify-content: center;

		.legend {
			width: 50%;
			position: relative;

			.legend-item {
				width: 100%;
				position: absolute;
				display: flex;
				flex-direction: column;
				padding-inline: 1rem;

				.label {
					font: bold 1.6rem 'B52-ULC';
					margin: 0.25rem 0;

					@include sm {
						font-size: 1.4rem
					}
				}

				.description {
					font: 300 0.8rem 'Vasarely';
					margin: 0 0 0 2rem;

					@include sm {
						font-size: 0.7rem;
						margin-left: 0;
					}
				}
			}

			@include xs {
				.legend-item:last-child {
					.description {
						display: none !important;
					}
				}
			}
		}

		.chart {
			width: 50%;
			max-width: 16rem;

			.bar {
				.subbar {
					.label {
						text-anchor: middle;
						dominant-baseline: middle;

						font-size: 20px;

						@include sm {
							font-size: 18px;
						}
					}

					&.black {
						rect {
							fill: $black;
						}

						text {
							fill: antiquewhite
						}
					}

					&.brown {
						rect {
							fill: $brown;
						}

						text {
							fill: $crimson;
						}
					}

					&.yellow {
						rect {
							fill: $gold;
						}

						text {
							fill: $black;
						}
					}
				}
			}
		}

		@include sm {
			.legend {
				width: 60%;
			}

			.chart {
				width: 40%;
			}
		}
	}
</style>