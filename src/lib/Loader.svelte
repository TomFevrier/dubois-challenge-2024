<script>
	import Spiral from './Spiral.svelte';

	const data = [
		{
			year: 1875,
			value: 21186,
			color: 'pink',
			dasharray: [3.93, 393.16]
		},
		{
			year: 1880,
			value: 498512,
			color: 'blue',
			dasharray: [92.44, 278.37]
		},
		{
			year: 1885,
			value: 736170,
			color: 'tan',
			dasharray: [136.50, 208.05]
		},
		{
			year: 1890,
			value: 1173624,
			color: 'gold',
			dasharray: [217.62, 100.71]
		},
		{
			year: 1895,
			value: 1322694,
			color: 'grey',
			dasharray: [245.26, 46.90]
		},
		{
			year: 1899,
			value: 1434975,
			color: 'crimson',
			dasharray: [266.08, 0]
		}
	];
</script>

<svg class='loader' viewBox='0 0 100 100'>
	<g class='spirals' transform='translate(50, 50)'>
		{#each data as d, i}
			<Spiral
				index={i}
				startRadius={45 - i * 2}
				endRadius={15 - i * 2}
				color={d.color}
				dasharray={d.dasharray} />
		{/each}
	</g>
</svg>

<style lang='scss'>
	.loader {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 16rem;
		height: 16rem;

	}
</style>
