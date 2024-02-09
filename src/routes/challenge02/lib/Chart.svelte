<script>
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import { scaleLinear } from 'd3-scale';
	import { extent } from 'd3-array';
	import { stack, area } from 'd3-shape';

	import { Switch } from '$lib';
	import { format } from '$lib/utils';

	export let data;

	let width;
	$: height = width * 1.8;

	let isZoomed = false;

	const padding = {
		top: 60,
		right: 70,
		bottom: 20,
		left: 60
	};

	const xRange = tweened([100, 0], {
		duration: 1200,
		easing: cubicInOut
	});

	const stackedData = stack()
		.keys(['Free', 'Slave'])
		(data);

	$: xScale = scaleLinear()
		.domain($xRange)
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain(extent(data, (d) => d.Year))
		.range([padding.top, height - padding.bottom]);

	$: areaGenerator = area()
		.y((d) => yScale(d.data.Year))
		.x0((d) => xScale(d[0]))
		.x1((d) => xScale(d[1]));

	$: xRange.set(isZoomed ? [3, 0] : [100, 0]);
</script>

<div class='chart' bind:clientWidth={width}>
	<!-- Bouton pour passer de l'un à l'autre, façon toggle -->
	<Switch bind:checked={isZoomed} label='Zoomer' />
	{#if width}
		<svg {width} {height}>
			<defs>
				<mask id='graph'>
					<path fill='white' d={[
						`M${padding.left},${height - padding.bottom}`,
						`L${width - padding.right},${height - padding.bottom}`,
						`L${width - padding.right},${padding.top}`,
						`L${padding.left},${padding.top}`,
						...Array.from({ length: 128 }, (_, i) => {
							const x = padding.left - 10 + Math.random() * 10;
							const y = padding.top + i * (height - padding.top - padding.bottom) / 128;
							return `L${x},${y}`;
						}),
						'Z'
					].join(' ')} />
					<!-- <rect
						x={padding.left}
						y={padding.top}
						width={width - padding.left - padding.right}
						height={height - padding.top - padding.bottom}
						fill='white' /> -->
				</mask>
			</defs>
			<g class='areas' mask='url(#graph)'>
				<path class='area slave' d={areaGenerator(stackedData[1])} />
				<path class='area free' d={areaGenerator(stackedData[0])} />
			</g>
			<g class='axis x-axis'>
				<g class='ticks'>
					{#each [1, 2, 3, 100] as value}
						<g class='tick' class:hidden={width - padding.right - xScale(value) < 32 || xScale(value) < padding.left}>
							<text x={xScale(value)} y={padding.top - 10}>
								{value}%
							</text>
							<line
								class='tick-line'
								x1={xScale(value)}
								y1={padding.top - 6}
								x2={xScale(value)}
								y2={padding.top} />
						</g>
					{/each}
				</g>
			</g>
			<g class='axis y-axis'>
				<g class='ticks'>
					{#each data as d}
						<g class='tick'>
							<text x={20} y={yScale(d.Year)}>
								{d.Year}
							</text>
							<line
								class='grid-line'
								x1={padding.left}
								x2={width - padding.right}
								y1={yScale(d.Year)}
								y2={yScale(d.Year)} />
						</g>
					{/each}
				</g>
			</g>
			<g class='values'>
				{#each data as d, i}
					<g class='value'>
						<text x={width - padding.right * 0.5} y={yScale(d.Year)}>
							{format('.1~f')(d.Free)}
							{#if i === 0 || i === data.length - 1}
								&nbsp;%
							{/if}
						</text>
					</g>
				{/each}
			</g>
			<g class='legend'>
				<text y={15}>
					<tspan x={width - padding.right * 0.5}>
						Pourcentage
					</tspan>
					<tspan x={width - padding.right * 0.5} dy='1.1em'>
						de
					</tspan>
					<tspan x={width - padding.right * 0.5} dy='1.1em'>
						Noirs libres
					</tspan>
				</text>
			</g>
		</svg>
	{/if}
</div>

<style lang='scss'>
	.chart {
		width: 100%;
		max-width: 360px;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		.areas {			
			.area {
				&.free {
					fill: $crimson;
					stroke: antiquewhite;
				}

				&.slave {
					fill: $black;
				}
			}
		}


		.axis {
			.ticks {
				.tick {
					transition: opacity 300ms cubic-bezier(0.65, 0, 0.35, 1);

					.grid-line {
						stroke: antiquewhite;
					}

					.tick-line {
						stroke-width: 0.5px;
						stroke: black;
					}

					text {
						text-anchor: middle;
					}

					&.hidden {
						opacity: 0;
					}
				}
			}
		}

		.x-axis {
			text {
				font-size: 0.8rem;
			}
		}

		.y-axis {
			.ticks {
				.tick {
					text {
						dominant-baseline: middle;
					}
				}
			}
		}

		.values {
			.value {
				text-anchor: middle;
				dominant-baseline: middle;
			}
		}

		.legend {
			text {
				font-size: 0.7rem;
				font-weight: 300;
				text-anchor: middle;
			}
		}
		
	}
</style>
