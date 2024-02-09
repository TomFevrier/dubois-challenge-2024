<script>
	import { base } from '$app/paths';

	export let prev = '';
	export let next = '';
</script>

<nav>
	<ul>
		<li class:hidden={!prev}>
			<a href='{base}/{prev}'>
				↫
			</a>
		</li>
		<li>❋</li>
		<li class:hidden={!next}>
			<a href='{base}/{next}'>
				↬
			</a>
		</li>
	</ul>
</nav>

<style lang='scss'>
	nav {
		ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem;

			li {
				font-size: 1.2rem;
				user-select: none;

				&.hidden {
					visibility: hidden;
				}
			}
		}
	}
</style>