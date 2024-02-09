<script>
	import Spiral from './Spiral.svelte';

	// 1875: 21186
	// 1880: 498512
	// 1885: 736170
	// 1890: 1173624
	// 1895: 1322694
	// 1899: 1434975

	const data = [
		{ year: 1875, value: 21186, yZero: 25 },
		{ year: 1880, value: 498512, yZero: 24 },
		{ year: 1885, value: 736170, yZero: 23 },
		{ year: 1890, value: 1173624, yZero: 22 },
		{ year: 1895, value: 1322694, yZero: 21 },
		{ year: 1899, value: 1434975, yZero: 20 }
	];

	/*
	nombre_lignes: 6
	decalage: 3*6+2 = 20
	y_zero: 20+6
	*/

	const slope = (20 - 6) / data.at(-1).value;
	console.log(slope)

	const positions = data.map((d) => {
		const yFinal = d.yZero - d.value * slope;
		return {
			...d,
			yFinal,
			x1: 0,
			x2: d.value,
			x3: d.value,
			x4: 0,
			y1: d.yZero,
			y2: yFinal,
			y3: yFinal + 1,
			y4: d.yZero + 1
		};
	});

	console.log(positions)

	// $: rangeMax = spirals && spirals.querySelector('.spiral.crimson').getTotalLength();

	// $: scale = scaleLinear()
	// 	.domain([0, data.at(-1).value])
	// 	.range([0, 266.078948974609375]);

</script>

<svg class='loader' viewBox='0 0 100 100'>
	<g class='spirals' transform='translate(50, 50)'>
	</g>
</svg>

<style lang='scss'>
	.loader {
		width: 6rem;
		height: 6rem;

	}
</style>
