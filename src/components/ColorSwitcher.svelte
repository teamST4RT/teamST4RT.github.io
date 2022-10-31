<script>
    function toggle(cb) {
        document.documentElement.setAttribute(
            "data-theme",
            cb.target.checked ? "dark" : "light"
        );
    };
</script>

<input type="checkbox" id="switch" on:click={toggle}>
<label for="switch" class="switch_label">
    <span class="onf_btn"></span>
</label>

<style lang="scss">
    @import "../stylesheets/ColorSwitcher.scss";
</style>
