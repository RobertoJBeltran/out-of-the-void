<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import monster from "$lib/assets/knight.png";
    import BottomControls from "$lib/components/BottomControls.svelte";
    import stairbackground from "$lib/assets/stairs.png"
    let isRevealed = $state(true);

</script>
<style>
    .stairs {
        height: 100%;
    }
</style>
<div id='viewport' class='viewport'>
    <img src={stairbackground} class="stairs" alt="" >
    <img src={monster} class="monster" class:hide={!isRevealed} alt="" />
</div>
<BottomControls 
    backRoute={"/dungeon/tomb"}
    bind:isRevealed
/>

