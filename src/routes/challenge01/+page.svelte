<script>
	import { onMount, tick } from 'svelte';

	import { json } from 'd3-fetch';
	
	import { Loader, ChartHeader, ChartFooter, Nav } from '$lib';
	import { Map } from './lib';

	let isLoaded = false;

	let counties;

	onMount(async () => {
		counties = await json('data/challenge01/counties.geojson');

		await tick();
		balanceText();

		setTimeout(() => isLoaded = true, 500);
	});

	const categories = [
		{ id: 'inf1000', label: 'Moins de 1000' },
		{ id: 'from1000to2500', label: '1000 à 2500' },
		{ id: 'from2500to5000', label: '2500 à 5000' },
		{ id: 'from5000to10000', label: '5000 à 10 000' },
		{ id: 'from10000to15000', label: '10 000 à 15 000' },
		{ id: 'from15000to20000', label: '15 000 à 20 000' },
		{ id: 'from20000to30000', label: '20 000 à 30 000' }
	];
</script>

<svelte:head>
	<title>Du Bois Challenge 2024 | Semaine 1</title>
</svelte:head>
{#if !isLoaded}
	<Loader />
{:else}
	<ChartHeader>
		Population noire en Géorgie par comtés
	</ChartHeader>
	<div class='legend'>
		{#each categories as category}
			<div class='swatch {category.id}'>
				{category.label}
			</div>
		{/each}
	</div>
	<div class='maps'>
		<Map
			key='population1870'
			title='1870'
			{counties}
			{categories} />
		<Map
			key='population1880'
			title='1880'
			{counties}
			{categories} />
	</div>
	<ChartFooter>
		<a
			href='https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/challenge/2024/challenge01/original-plate-06.jpg'
			target='_blank'
			slot='week'
		>
			Semaine 1
		</a>
		<Nav next='/challenge02' />
	</ChartFooter>
{/if}

<style lang='scss'>
	.legend {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
		column-gap: 1rem;
		row-gap: 0.5rem;
		width: 100%;
		max-width: 36rem;

		.swatch {
			font-size: 0.8rem;
			white-space: nowrap;

			&::before {
				width: 1.2rem;
				height: 1.2rem;
				margin-right: 8px;
			}
		}
	}

	.maps {
		display: flex;
		flex-direction: row;
		width: 100%;

		@include sm {
			flex-direction: column;
			align-items: center;
		}
	}

	:global {
		.swatch {
			display: inline-flex;
			align-items: center;
			font-size: 0.8rem;

			&::before {
				content: "";
				display: inline-block;
				width: 0.9rem;
				height: 0.9rem;
				margin-right: 4px;
				border-radius: 50%;
			}
		}

		.inf1000 {
			&.swatch::before {
				background-color: $green;
			}

			&.county {
				fill: $green !important;
			}
		}

		.from1000to2500 {
			&.swatch::before {
				background-color: $gold;
			}

			&.county {
				fill: $gold !important;
			}
		}

		.from2500to5000 {
			&.swatch::before {
				background-color: $pink;
			}

			&.county {
				fill: $pink !important;
			}
		}

		.from5000to10000 {
			&.swatch::before {
				background-color: $crimson;
			}

			&.county {
				fill: $crimson !important;
			}
		}

		.from10000to15000 {
			&.swatch::before {
				background-color: $tan;
			}

			&.county {
				fill: $tan !important;
			}
		}

		.from15000to20000 {
			&.swatch::before {
				background-color: $brown;
			}

			&.county {
				fill: $brown !important;
			}
		}

		.from20000to30000 {
			&.swatch::before {
				background-color: $blue;
			}

			&.county {
				fill: $blue !important;
			}
		}
	}
</style>