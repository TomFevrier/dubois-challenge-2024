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

<div class='loader-bg'>
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
</div>

<style lang='scss'>
	.loader-bg {
		position: fixed;
		inset: 0;
		background-color: antiquewhite;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 101;

		.loader {
			width: 16rem;
			height: 16rem;

		}
	}
</style>
