<script>
    export let name;
    export let channel;

    const handleClick = () => {
        name = 'JavaScript Ninja';
    }

    const handleInput = (event) => {
        name = event.target.value;
    }
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>{channel} masters Angular, React & Svelte</p>
    <button on:click={handleClick}>Click to Change the Title</button>
	<!-- below are two methods for 2-way data binding in svelte, we can use any of the two ways but the second is more recommended approach  -->
    <!--<input type="text" on:input={handleInput} value={name}>-->
	<input type="text" bind:value={name}>

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