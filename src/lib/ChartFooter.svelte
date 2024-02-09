<footer>
	<div class='credits'>
		<span>Tom Février</span>
		<span>Du Bois Visualization Challenge 2024</span>
		<span>
			<slot name='week' />
		</span>
	</div>
	<slot />
</footer>

<style lang='scss'>
	footer {
		font: 0.8rem 'Vasarely';

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		
		.credits {
			display: flex;
			flex-direction: row;
			gap: 0.5rem;

			span:not(:first-child)::before {
				content: '❋';
				margin-right: 0.5rem;
			}

			@include sm {
				flex-direction: column;
				align-items: center;
				text-align: center;

				span::before {
					content: '' !important;
					margin: 0 !important;
				}
			}

			:global(a) {
				font-weight: normal;
				text-decoration: underline;
				text-underline-offset: 3px;
			}
		}
	}
</style>