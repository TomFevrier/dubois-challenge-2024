<script>
	import { geoPath, geoMercator } from 'd3-geo';

	import { Tooltip } from '$lib';
	import { findPolylabel } from '$lib/utils';

	export let key;
	export let title;
	export let counties;
	export let categories;

	const WIDTH = 1000;
	const HEIGHT = 1050;

	const projection = geoMercator()
		.fitSize([WIDTH, HEIGHT], counties);

	const path = geoPath().projection(projection);

	let containerWidth;

	let hovered = null;
</script>

<div class='map' bind:clientWidth={containerWidth}>
	<h2>{title}</h2>
	<div class='wrapper'>
		<svg viewBox='0 0 {WIDTH} {HEIGHT}'>
			<g class='counties'>
				{#each counties.features as f}
					<path
						class='county {f.properties[key]}'
						role='img'
						d={path(f)}
						on:mouseenter={() => {
							hovered = {
								datum: f.properties,
								position: projection(findPolylabel(f))
							};
						}}
						on:mouseleave={() => hovered = null} />
				{/each}
			</g>
		</svg>
		{#if hovered && hovered.datum}
			<Tooltip
				x={hovered.position[0] * (containerWidth / WIDTH)}
				y={hovered.position[1] * (containerWidth / WIDTH)}
				width={containerWidth}
				offset={0.5}
			>
				<h3>{hovered.datum.name}</h3>
				<p>
					<b>1870</b>
					{#if hovered.datum.population1870}
						<span class='swatch {hovered.datum.population1870}'>
							{categories.find((d) => d.id === hovered.datum.population1870).label}
						</span>
					{:else}
						<span style='margin-left: 3px;'>∅</span>
					{/if}
				</p>
				<p>
					<b>1880</b>
					<span class='swatch {hovered.datum.population1880}'>
						{categories.find((d) => d.id === hovered.datum.population1880).label}
					</span>
				</p>
			</Tooltip>
		{/if}
	</div>
</div>

<style lang='scss'>
	.map {
		width: 100%;
		flex: 1;

		h2 {
			font: bold 1.5rem 'B52-ULC';
			text-align: center;
			transform: translateX(-20%);
			margin: 0;

			@include sm {
				font-size: 1.25rem;
			}
		}

		.wrapper {
			position: relative;

			svg {
				overflow: visible;
				
				.counties {
					.county {
						stroke: $black;
						fill: transparent;
						stroke-width: 1.5px;
						stroke-linecap: round;

						&:hover {
							stroke: $black !important;
							fill: $black !important;
						}
					}
				}
			}
		}
	}
</style>
