<script>
	import { scaleLinear } from 'd3-scale';
	import { radialLine, curveCardinal } from 'd3-shape';
	import { range } from 'd3-array';

	export let index;
	export let startRadius;
	export let endRadius;
	export let color;
	export let dasharray;

	const start = 0;
	const end = 2.1;

	const points = range(start, end + 0.0001, (end - start) / 1000);

	const radiusScale = scaleLinear()
		.domain([start, end])
		.range([startRadius, endRadius]);

	const spiralGenerator = radialLine()
		.curve(curveCardinal)
		.angle((d) => 2 * Math.PI * d)
		.radius(radiusScale);
</script>

<mask id='mask-{index}'>
	<path
		class='spiral'
		d={spiralGenerator(points)}
		style='--total-length: {dasharray[0] + dasharray[1]}px; --delay: {index * 100}ms;' />
</mask>
<path
	class='spiral {color}'
	d={spiralGenerator(points)}
	mask='url(#mask-{index})'
	stroke-dasharray={dasharray.join(' ')} />

<style lang='scss'>
	.spiral {
		fill: none;
		stroke-width: 2px;
		stroke: white;

		&.pink {
			stroke: $pink;
		}

		&.blue {
			stroke: $blue;
		}

		&.brown {
			stroke: $brown;
		}

		&.gold {
			stroke: $gold;
		}

		&.tan {
			stroke: $tan;
		}

		&.grey {
			stroke: lightgrey;
		}

		&.crimson {
			stroke: $crimson;
		}
	}

	mask {
		.spiral {
			stroke-dasharray: var(--total-length);
			animation: animate 3000ms infinite var(--delay) cubic-bezier(0.37, 0, 0.63, 1);

			@keyframes animate {
				0%, 5%, 95%, 100% {
					stroke-dashoffset: var(--total-length);
				}

				45%, 55% {
					stroke-dashoffset: 0;
				}
			}
		}
	}
</style>