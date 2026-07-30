<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import monster from "$lib/assets/necromancer.png";
    import table from "$lib/assets/potiontable.png";
    import BottomControls from "$lib/components/BottomControls.svelte";

    let isRevealed = $state(true);

</script>
<style>
    .necro {
        right: 11%;
        width: 35%;
        bottom: 3%;
    }
    .table {
        width: 35%;
        left: 11%;
    }
</style>
<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={table} class="monster table" alt="" /> 
    <img src={monster} class="monster necro" class:hide={!isRevealed} alt="" />
</div>

<BottomControls 
    backRoute={"/dungeon/puzzle"}
    bind:isRevealed
/>