<script>
	import { onMount } from 'svelte';

	import { csv } from 'd3-fetch';
	import { autoType } from 'd3-dsv';
	
	import { Loader, ChartHeader, ChartFooter, Nav } from '$lib';
	import { Chart } from './lib';

	let isLoaded = false;

	let data;

	onMount(async () => {
		data = await csv('data/challenge02/data.csv', autoType);

		setTimeout(() => isLoaded = true, 500);
	});
</script>

<svelte:head>
	<title>Du Bois Challenge 2024 | Semaine 2</title>
</svelte:head>
{#if !isLoaded}
	<Loader />
{/if}
{#if data}
	<ChartHeader>
		Esclaves et Noirs libres
	</ChartHeader>
	<Chart {data} />
	<ChartFooter>
		<a
			href='https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/challenge/2024/challenge02/original-plate-12.jpg'
			target='_blank'
			slot='week'
		>
			Semaine 2
		</a>
		<Nav prev='/challenge01' next='/challenge03' />
	</ChartFooter>
{/if}