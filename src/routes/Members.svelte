<script>
    import { members } from "../data/members.json";
    import Card from "../components/Card.svelte";
    const mems = members;
</script>

<div class="card-container">
    {#each mems as m}
        <Card {...m} />
    {/each}
</div>

<style lang="scss">
    .card-container {
        display: flex;
        flex-wrap: wrap;
    }
</style>
