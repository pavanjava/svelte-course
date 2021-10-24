<script>
    // variable to govern the modal to be shown or not
    // assign it to false inorder to hide the modal
    export let showModal = true;

    // this message gets overwritten if the prop is passed explicitly.
    export let message = 'default modal message here';

    // conditional css, make it to true and see the trick
    let isNinja = false;

    const handleModalClose = () => {
        showModal = false;
    }
</script>

{#if showModal}
    <div class="backdrop" class:ninja={isNinja}>
        <div class="modal">
            <p>{message}</p>
            <button on:click={handleModalClose}>OK</button>
        </div>
    </div>
{/if}

<style>
    .backdrop{
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0,0,0,0.8);
    }
    .modal{
        padding: 10px;
        border-radius: 10px;
        max-width: 30%;
        margin: 10% auto;
        text-align: center;
        background: white;
    }
    .ninja{
        color: cornflowerblue;
    }
    .ninja button{
        background: cornflowerblue;
        color: white;
        border-color: #eeeeee;
        border-radius: 10%;
        width: 30%;
    }
</style>