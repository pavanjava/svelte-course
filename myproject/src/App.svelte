<script>
    export let name;
    export let channel;
    let firstName;
    let lastName;

    // reactive variable
    $: fullName = `${firstName} ${lastName}`;

    //reactive block
    $: {
        console.log(firstName);
        console.log(lastName);
        console.log(fullName);
        console.log(name);
    }

    const handleClick = () => {
        name = 'JavaScript Ninja';
    }

    const handleInput = (event) => {
        name = event.target.value;
    }
</script>

<!--
This example demo the reactive values, reactive values are such values they depend on
and updates any ony of the depending value changes
-->
<main>
    <h1>Hello {name}!</h1>
    <p>{fullName}-{channel} masters Angular, React & Svelte</p>
    <input type="text" bind:value={name}>
    <input type="text" bind:value={firstName}>
    <input type="text" bind:value={lastName}>
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