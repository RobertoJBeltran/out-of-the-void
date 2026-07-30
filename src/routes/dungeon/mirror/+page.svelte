<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import monster from "$lib/assets/well.png";
    import left from "$lib/assets/raise-zombie.svg";
    import right from "$lib/assets/mirror-mirror.svg";
    import SideControls from "$lib/components/SideControls.svelte";
    import BottomControls from "$lib/components/BottomControls.svelte";

    let isRevealed = $state(true);

</script>
<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={monster} class="monster" alt="" />
</div>
<BottomControls 
    backRoute={"/dungeon/gargoyle"}
    action={"/dungeon/look"}
    actionLabel={"Look"}
    bind:isRevealed
/>