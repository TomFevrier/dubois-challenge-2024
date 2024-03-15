<script>
	import { balancer } from './actions';
</script>

<header>
	<h1 use:balancer>
		<slot />
	</h1>
	<h2 use:balancer>
		<slot name='subtitle' />
	</h2>
</header>

<style lang='scss'>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;

		h1 {
			font: bold 2rem 'B52-ULC';
			text-align: center;
			margin: 0;
			width: 100%;
			max-width: 40rem;

			@include sm {
				font-size: 1.6rem;
			}
		}

		h2 {
			font: 300 1.2rem 'Vasarely';
			text-align: center;
			margin: 0;
			width: 100%;
			max-width: 40rem;

			@include sm {
				font-size: 1rem;
			}
		}
	}
</style>