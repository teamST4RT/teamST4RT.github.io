<script>
    import { ctfs } from "../data/ctfs.json";
    import { dctfs } from "../data/d_ctfs.json";
    let st4rt = "./images/info.svg";
</script>

<div class="about">
    <div class="records">
        <h1>CTFs</h1>
        {#each ctfs as ctf}
            <div class="record">
                <span class="place">{ctf.p}</span>
                <span class="ctf-name">{ctf.n}</span>
            </div>
        {/each}
        <h1>DOMESTIC CTFs</h1>
        {#each dctfs as ctf}
            <div class="record">
                <span class="place">{ctf.p}</span>
                <span class="ctf-name">{ctf.n}</span>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "../stylesheets/About.scss";
</style>