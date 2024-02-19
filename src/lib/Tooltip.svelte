<script>
	export let x;
	export let y;
	export let width;
	export let offset = 0;
	export let style = '';

	let w;
	let h;

	$: getPosition = (x, y, width) => {
		if (!w || !h) return 'hidden';

		if (x < w * 0.5) {
			return 'left';
		}

		if (x > width - w * 0.5) {
			return 'right';
		}

		if (y < h * 1.5) {
			return 'top';
		}

		return 'bottom';
	}
	
	$: position = getPosition(x, y, width);
</script>

<div
	class='tooltip {position}'
	style='--offset: {offset}rem; top: {y}px; left: {x}px; {style}'
	bind:clientWidth={w}
	bind:clientHeight={h}
>
	<slot />
</div>

<style lang='scss'>
	.tooltip {
		position: absolute;
		min-width: 12rem;
		max-width: 16rem;
		padding: 0.5rem;
		background-color: white;
		box-shadow: 0 0.25rem 1rem 0.25rem rgba(0, 0, 0, 0.2);
		border-radius: 0.25rem;
		z-index: 999;
		pointer-events: none;
		text-align: center;

		&.hidden {
			visibility: hidden;
		}
		
		&::after {
			content: "";
			position: absolute;
			border-width: 0.5rem;
			border-style: solid;
		}

		&.bottom {
			transform: translate(-50%, calc(-100% - var(--offset)));

			&::after {
				top: 100%;
				left: 50%;
				transform: translateX(-50%);
				border-color: white transparent transparent transparent;
			}
		}

		&.top {
			transform: translate(-50%, var(--offset));

			&::after {
				top: 0;
				left: 50%;
				transform: translate(-50%, -100%);
				border-color: transparent transparent white transparent;
			}
		}

		&.left {
			transform: translate(var(--offset), -50%);

			&::after {
				top: 50%;
				left: -1rem;
				transform: translateY(-50%);
				border-color: transparent white transparent transparent;
			}
		}

		&.right {
			transform: translate(calc(-100% - var(--offset)), -50%);

			&::after {
				top: 50%;
				left: 100%;
				transform: translateY(-50%);
				border-color: transparent transparent transparent white;
			}
		}

		:global(h3) {
			font: bold 1.1rem 'B52-ULC', serif;
			margin: 0.25rem 0 0.5rem;
			line-height: 110%;
		}

		:global(h4) {
			font: 1rem 'Vasarely', sans-serif;
			margin: 0;
			line-height: 110%;
		}

		:global(p) {
			font: 300 0.9rem 'Vasarely', sans-serif;
			margin: 0.25rem 0;
			line-height: 110%;
			text-align: left;
			display: flex;
			align-items: center;
			gap: 6px;

			:global(b) {
				font-weight: normal;
			}
		}
	}
</style>