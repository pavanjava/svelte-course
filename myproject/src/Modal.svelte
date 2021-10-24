<!--
1. stopPropagation - stop the event bubbling or capturing any further
2. capture - fires the handler during the capture phase not bubbling
3. once - makes sure the event can only fire once (removes handler)
4. preventDefault - prevent the default action (run e.preventDefault())
5. self - only fires the event if the clicked element is the target

-->

<script>
    // variable to govern the modal to be shown or not
    // assign it to false inorder to hide the modal
    export let showModal = false;

    // this message gets overwritten if the prop is passed explicitly.
    export let message = 'default modal message here';

    // conditional css, make it to true and see the trick
    let isNinja = false;

    const handleModalClose = () => {
        showModal = false;
    }
</script>

{#if showModal}
    <div class="backdrop" class:ninja={isNinja} on:click|self>
        <div class="modal">
            <p>{message}</p>
            <!-- 'on:click' is called the eventForward to the parent component where the component is being called -->
            <button on:click>OK</button>
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