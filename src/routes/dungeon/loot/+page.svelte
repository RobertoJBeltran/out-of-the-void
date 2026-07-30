<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import monster from "$lib/assets/treasure.png";
    import BottomControls from "$lib/components/BottomControls.svelte";

    let isRevealed = $state(true);

</script>
<style>
    .loot {
        bottom: -10%;
    }
</style>
<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={monster} class="monster loot" alt="" />
</div>
<BottomControls 
    backRoute={"/dungeon/puzzle"}
    bind:isRevealed
/>