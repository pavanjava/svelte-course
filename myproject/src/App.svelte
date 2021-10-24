<script>
    import Modal from './Modal.svelte';

    export let name;
    export let languages;

    let showModal = false;

    // handle the button click to remove the language
    const removeLanguage = (id) => {
        showModal = !showModal;
        languages = languages.filter((language) => language.id !== id);
    }

    const handleModalClose = () => {
        showModal = !showModal;
    }
</script>

<!-- passing the data as props to modal component, making it more reusable, don't pass the message prop and see the trick-->
<Modal message="do you want to delete row ?" {showModal} on:click={handleModalClose}/>

<main>
    <h1>Hello {name}!</h1>
    <table>
        <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Score</td>
            <td>Comment</td>
        </tr>
        </thead>
        {#each languages as language (language.id)}
            <tr>
                <td>{language.id}</td>
                <td>{language.name}</td>
                <td>{language.score}</td>
                <td>
                    {#if language.score > 3}
                        Good Score
                    {:else}
                        Low Score
                    {/if}
                </td>
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