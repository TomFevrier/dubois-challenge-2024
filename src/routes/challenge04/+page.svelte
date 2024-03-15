<script>
	import { onMount } from 'svelte';

	import { json, csv } from 'd3-fetch';
	import { autoType } from 'd3-dsv';
	
	import { Loader, ChartHeader, ChartFooter, Nav } from '$lib';
	import { Map } from './lib';

	let isLoaded = false;

	let world;
	let data;

	onMount(async () => {
		world = await json('data/challenge04/world.json');
		data = await csv('data/challenge04/data.csv', autoType);

		setTimeout(() => isLoaded = true, 500);
	});
</script>

<svelte:head>
	<title>Du Bois Challenge 2024 | Semaine 4</title>
</svelte:head>
{#if !isLoaded}
	<Loader />
{/if}
<ChartHeader>
	Routes de la traite des esclaves africains
</ChartHeader>
{#if world && data}
	<Map {world} {data} />
{/if}
<ChartFooter>
	<a
		href='https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/challenge/2024/challenge04/original-plate-01.jpg'
		target='_blank'
		slot='week'
	>
		Semaine 4
	</a>
	<Nav prev='/challenge03' next='/challenge05' />
</ChartFooter>