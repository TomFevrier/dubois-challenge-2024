<header>
	<h1 class='balance-text'>
		<slot />
	</h1>
</header>

<style lang='scss'>
	h1 {
		font: bold 2rem 'B52-ULC';
		text-align: center;
		margin: 0;

		@include sm {
			font-size: 1.6rem;
		}
	}
</style>