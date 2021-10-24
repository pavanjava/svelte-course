<script>
    export let name;
    export let languages;

    // handle the button click to remove the language
    const removeLanguage = (id) => {
        languages = languages.filter((language) => language.id !== id);
    }
</script>

<main>
    <h1>Hello {name}!</h1>
    <table>
        <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Score</td>
        </tr>
        </thead>
        {#each languages as language (language.id)}
            <tr>
                <td>{language.id}</td>
                <td>{language.name}</td>
                <td>{language.score}</td>
                <td>
                    <button on:click={() => {removeLanguage(language.id)}}>Delete</button>
                </td>
            </tr>
            <!-- else is displayed only when the languages array is empty, please comment the array and check if this works-->
        {:else}
            <p>No Data to display....</p>
        {/each}
    </table>
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