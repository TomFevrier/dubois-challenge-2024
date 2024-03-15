<script>
	import { onMount } from 'svelte';

	import { csv } from 'd3-fetch';
	import { autoType } from 'd3-dsv';
	
	import { Loader, ChartHeader, ChartFooter, Nav } from '$lib';
	import { Chart } from './lib';

	let isLoaded = false;

	let data;

	onMount(async () => {
		data = await csv('data/challenge03/data.csv', autoType);

		setTimeout(() => isLoaded = true, 500);
	});
</script>

<svelte:head>
	<title>Du Bois Challenge 2024 | Semaine 3</title>
</svelte:head>
{#if !isLoaded}
	<Loader />
{/if}
{#if data}
	<ChartHeader>
		Hectares de terrain appartenant à des Noirs en Géorgie
	</ChartHeader>
	<Chart {data} />
	<ChartFooter>
		<a
			href='https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/challenge/2024/challenge03/original-plate-19.jpg'
			target='_blank'
			slot='week'
		>
			Semaine 3
		</a>
		<Nav prev='/challenge02' next='/challenge04' />
	</ChartFooter>
{/if}