<script>
	import { onMount } from 'svelte';

	import { csv } from 'd3-fetch';
	import { autoType } from 'd3-dsv';
	
	import { Loader, ChartHeader, ChartFooter, Nav } from '$lib';
	import { Chart } from './lib';

	let isLoaded = false;

	let data;

	onMount(async () => {
		data = await csv('data/challenge05/data.csv', autoType);

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
	Métissage en Géorgie
	<svelte:fragment slot='subtitle'>
		Basé sur une étude de 40 000 individus d’origine noire
	</svelte:fragment>
</ChartHeader>
{#if data}
	<Chart {data} />
{/if}
<ChartFooter>
	<a
		href='https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/challenge/2024/challenge05/original-plate-13.jpg'
		target='_blank'
		slot='week'
	>
		Semaine 5
	</a>
	<Nav prev='/challenge04' />
</ChartFooter>