<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import monster from "$lib/assets/zombie.png";
    import left from "$lib/assets/tombstone.svg";
    import right from "$lib/assets/spider-alt.svg";
    import SideControls from "$lib/components/SideControls.svelte";
    import BottomControls from "$lib/components/BottomControls.svelte";

    let isRevealed = $state(true);

</script>
<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={monster} class="monster" class:hide={!isRevealed} alt="" />
</div>
<SideControls
    leftRoute={'/dungeon/tomb'}
    leftIcon={left}
    rightRoute={'/dungeon/spider'}
    rightIcon={right}
/>
<BottomControls 
    backRoute={"/dungeon/gargoyle"}
    bind:isRevealed
/>
