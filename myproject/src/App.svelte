<script>
	export let name;
	export let channel;

	const changeTitle = () => {
		name = 'JavaScript Ninja';
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>{channel} masters Angular, React & Svelte</p>
	<button on:click={changeTitle}>Click to Change the Title</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>