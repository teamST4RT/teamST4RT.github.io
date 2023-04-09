<script>
    export let name;
    export let comment;
    export let sites;
    let website = "./images/website.svg";
    let facebook = "./images/facebook.svg";
    let github = "./images/github.svg";
    let twitter = "./images/twitter.svg";
    let sites_img = [website, github, facebook, twitter];
    function ImageHandler(e) {
        e.target.src = "./images/default.gif";
    }
</script>

<div class="cards">
    <!-- svelte-ignore a11y-missing-attribute -->
    <div class="card-image-wrapper">
        <img src={`./images/${name}`} on:error={ImageHandler} class="card-image"/>
    </div>
    <div class="contents-wrapper">
        <div class="introduce">
            <h1>{name}</h1>
            <p>{comment}</p>
        </div>
        <div class="sites">
            {#each sites as site, i}
                {#if site}
                    <a href={site} target="_blank">
                        <img src={sites_img[i]} alt="site" />
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    @import "../stylesheets/Card.scss";
</style>
