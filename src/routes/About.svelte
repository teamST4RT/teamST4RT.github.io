<script>
    import { ctfs } from "../data/ctfs.json";
    import { jctfs } from "../data/j_ctfs.json";
    import "../stylesheets/About.css";
    let st4rt = "./images/info.svg";
</script>

<div class="about">
    <div class="records">
        <h1>CTFs</h1>
        {#each ctfs as ctf}
            <div class="record">
                <span>{ctf.p}</span>
                <span>{ctf.n}</span>
            </div>
        {/each}
        <h1>JUNIOR CTFs</h1>
        {#each jctfs as ctf}
            <div class="record">
                <span>{ctf.p}</span>
                <span>{ctf.n}</span>
            </div>
        {/each}
    </div>
</div>
