<script>
	export let checked = false;
	export let label;
</script>

<div class='switch'>
    <span class='label'>
		{label}
	</span>
    <button
        role='switch'
        aria-checked={checked}
        on:click={() => checked = !checked}>
    </button>
</div>

<style lang='scss'>
	.switch {
		display: flex;
        align-items: center;

		.label {
			font-size: 0.9rem;
		}

		button {
			width: 3rem;
			height: 1.5rem;
			position: relative;
			margin-left: 0.5rem;
			background: lightgrey;
			border: none;
			border-radius: 0.25rem;

			&::before {
				content: "";
				position: absolute;
				width: 1.25rem;
				height: 1.25rem;
				background: #fff;
				top: 0.12rem;
				right: 1.63rem;
				border-radius: 0.1rem;
				transition: transform 300ms;
			}

			&[aria-checked='true'] {
				background-color: $crimson;

				&::before {
					transform: translateX(1.5rem);
					transition: transform 0.3s;
				}
			}
		}
	}
</style>