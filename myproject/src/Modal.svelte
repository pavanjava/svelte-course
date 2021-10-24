<script>
    // variable to govern the modal to be shown or not
    // assign it to false inorder to hide the modal
    let showModal = true;
</script>

{#if showModal}
    <div class="backdrop">
        <div class="modal">
            <p>Sign up for the Ninja course</p>
        </div>
    </div>
{/if}

<style>

</style>