<script>
</script>

<div class='app'>
	<main>
		<slot />
	</main>
</div>

<style lang='scss'>
	main {
		width: 100%;
		max-width: 72rem;
		overflow: hidden;
		padding: 2rem;
		margin: 0 auto;
		
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
</style>
