<script>
	import { scaleSqrt } from 'd3-scale';
	import { max, index, sum, sort, descending } from 'd3-array';
	import { geoPath, geoContains, geoCentroid } from 'd3-geo';
	import { symbol, symbolStar } from 'd3-shape';
	import { geoInterruptedMollweideHemispheres } from 'd3-geo-projection';
	import { feature } from 'topojson-client';

	import { Tooltip } from '$lib';
	import { format } from '$lib/utils';
	import { balancer } from '$lib/actions';

	import { uniqBy } from 'lodash-es';

	export let world;
	export let data;

	const WIDTH = 2000;
	const HEIGHT = 1080;

	const countries = feature(world, world.objects.world);

	const projection = geoInterruptedMollweideHemispheres()
		.fitExtent([[10, 10], [WIDTH - 10, HEIGHT - 10]], countries);

	const path = geoPath().projection(projection);


	const nodes = [
		...uniqBy(data, (d) => d.src).map((d) => ({
			name: d.src,
			coords: [d.src_lon, d.src_lat]
		})),
		...uniqBy(data, (d) => d.dst).map((d) => ({
			name: d.dst,
			coords: [d.dst_lon, d.dst_lat]
		}))
	]
	.map((node) => ({
		...node,
		outgoing: sum(data.filter((d) => d.src === node.name), (d) => d.count),
		incoming: sum(data.filter((d) => d.dst === node.name), (d) => d.count)
	}));

	const nodesIndex = index(nodes, (d) => d.name);

	const links = data
		.map((d) => ({
			source: nodesIndex.get(d.src),
			target: nodesIndex.get(d.dst),
			count: d.count
		}))
		.map((link) => ({
			...link,
			feature: {
				type: 'LineString',
				coordinates: [
					link.source.coords,
					link.target.coords,
				]
			}
		}));

	const strokeWidthScale = scaleSqrt()
		.domain([0, max(links, (d) => d.count)])
		.range([0, 16]);

	const radiusScale = scaleSqrt()
		.domain([0, max(nodes, (d) => d.incoming || d.outgoing)])
		.range([0, 28]);


	let containerWidth;

	let hoveredNode = null;
	let hoveredLink = null;

	const formatList = (links, key) => {
		const items = sort(links, (a, b) => descending(a.count, b.count))
			.map((d) =>  d[key].name);

		if (items.length === 1) {
			return items[0];
		}
		if (items.length <= 3) {
			return [items.slice(0, -1).join(', '), '&', items.at(-1)].join(' ');
		}
		return items.slice(0, 3).join(', ') + '...';
	}
</script>


<div class='map' bind:clientWidth={containerWidth}>
	<div class='wrapper'>
		<svg width='100%' viewBox='0 0 {WIDTH} {HEIGHT}'>
			<defs>
				<mask id='mask'>
					<path d={path({ type: 'Sphere' })} fill='white' />
				</mask>
			</defs>
			<g class='legend' transform='translate({WIDTH * 0.5},{HEIGHT * 0.05})'>
				<g class='star'>
					<circle r={16} />
					<path d={symbol(symbolStar, 128)()} />
				</g>
				<text y={56}>
					<tspan x={0}>État de</tspan><tspan x={0} dy={36}>Géorgie</tspan>
				</text>
			</g>
			<g class='countries' mask='url(#mask)'>
				{#each countries.features as f}
					<path
						class='country'
						class:colored={nodes.some((node) => geoContains(f, node.coords))}
						d={path(f)} />
				{/each}
			</g>
			<path class='outline' d={path({ type: 'Sphere' })} />
			<g class='links' mask='url(#mask)'>
				{#each links as link}
					<path
						role='img'
						class='link'
						class:faded={
							(hoveredLink && (hoveredLink.source.name !== link.source.name || hoveredLink.target.name !== link.target.name)) ||
							(hoveredNode && ![link.source.name, link.target.name].includes(hoveredNode.name))
						}
						d={path(link.feature)}
						stroke-width={strokeWidthScale(link.count)}
						on:mouseenter={() => hoveredLink = link}
						on:mouseleave={() => hoveredLink = null} />
				{/each}
			</g>
			<g class='nodes'>
				{#each nodes as node}
					<circle
						role='img'
						class='node'
						class:faded={
							(hoveredLink && ![hoveredLink.source.name, hoveredLink.target.name].includes(node.name)) ||
							(hoveredNode && !hoveredNode.links.some((link) => {
								return [link.source.name, link.target.name].includes(node.name);
							}))
						}
						cx={projection(node.coords)[0]}
						cy={projection(node.coords)[1]}
						r={radiusScale(node.incoming || node.outgoing)}
						on:mouseenter={() => {
							hoveredNode = {
								...node,
								links: links.filter((link) => [link.source.name, link.target.name].includes(node.name))
							};
						}}
						on:mouseleave={() => hoveredNode = null} />
				{/each}
			</g>
			<g class='star' transform='translate({projection([-84.39, 33.75]).join(', ')})'>
				<circle r={16} />
				<path d={symbol(symbolStar, 128)()} />
			</g>
		</svg>
	</div>
	{#if hoveredNode}
		<Tooltip
			x={projection(hoveredNode.coords)[0] * (containerWidth / WIDTH)}
			y={projection(hoveredNode.coords)[1] * (containerWidth / WIDTH)}
			width={containerWidth}
			offset={0.5}
		>
			<h3>{hoveredNode.name}</h3>
			<h4>
				<b>{format(',d')(hoveredNode.incoming || hoveredNode.outgoing)} trajets</b>
			</h4>
			<p use:balancer>
				{#if hoveredNode.incoming > 0}
					depuis {formatList(hoveredNode.links, 'source')}
				{:else if hoveredNode.outgoing > 0}
					vers {formatList(hoveredNode.links, 'target')}
				{/if}
			</p>
		</Tooltip>
	{/if}
	{#if hoveredLink}
		<Tooltip
			x={projection(geoCentroid(hoveredLink.feature))[0] * (containerWidth / WIDTH)}
			y={projection(geoCentroid(hoveredLink.feature))[1] * (containerWidth / WIDTH)}
			width={containerWidth}
			offset={0.5}
		>
			<h3>{hoveredLink.source.name} - {hoveredLink.target.name}</h3>
			<h4>
				<b>{format(',d')(hoveredLink.count)} trajets</b>
			</h4>
		</Tooltip>
	{/if}
</div>

<style lang='scss'>
	.map {
		width: 100%;
		height: 100%;

		svg {
			.legend {
				font-size: 32px;
				text-anchor: middle;
			}

			.country {
				fill: $tan;
				stroke: $tan;

				&.colored {
					fill: $brown;
					stroke: $brown;
				}
			}

			.outline {
				fill: none;
				stroke: $black;
				stroke-width: 2px;
			}
			
			.link {
				fill: none;
				stroke: $black;
				stroke-linecap: round;

				&.faded {
					opacity: 0.05;
				}
			}

			.node {
				fill: $black;

				&.faded {
					opacity: 0.05;
				}
			}

			.star {
				circle {
					fill: $black;
				}

				path {
					fill: antiquewhite;
				}
			}
		}

		h4 {
			font-size: 0.9rem;
		}

		p {
			text-align: center;
		}
	}
</style>