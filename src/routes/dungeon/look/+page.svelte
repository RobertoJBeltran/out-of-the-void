<script>
    import BottomControls from "$lib/components/BottomControls.svelte";
    import beholder from "$lib/assets/beholder.webp";
</script>

<style>
    .beholder {
        background-image: url("$lib/assets/beholder.webp");
        background-size: cover;
        background-position: center;
    }
</style>

<div id="viewport" class="beholder isshaking">
</div>
<BottomControls
    backRoute = {"mirror"}
/>