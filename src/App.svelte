<script lang="ts">
    import { Router, Route, Link } from "svelte-navigator";
    import Home from "./routes/Home.svelte";
    import About from "./routes/About.svelte";
    import Members from "./routes/Members.svelte";
	let st4rt="images/st4rt.png";
    $: visible = false;
    function toggle_btns() {
        visible = visible ? false : true;
    }
</script>

<Router>
    <div>
        <h1>ST4RT</h1>
        <img src={st4rt} alt="Image Error" on:click={toggle_btns} />
    </div>
    {#if visible}
        <div>
            <Link to="/">Base</Link>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="members">members</Link>
        </div>
    {/if}

    <Route path="home" component={Home} />
    <Route path="about" component={About} />
    <Route path="members" component={Members} />
</Router>

<style>
    h1 {
        color: rgb(233, 221, 221);
    }

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
</style>
