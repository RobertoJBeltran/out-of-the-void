<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import monster from "$lib/assets/minotaur.png";
    import left from "$lib/assets/dragon-orb.svg";
    import right from "$lib/assets/bird-scepter.svg";
    import SideControls from "$lib/components/SideControls.svelte";
    import BottomControls from "$lib/components/BottomControls.svelte";

    let isRevealed = $state(true);

</script>
<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={monster} class="monster" class:hide={!isRevealed} alt="" />
</div>
<SideControls
    leftRoute={'/dungeon/head'}
    leftIcon={left}
    rightRoute={'/dungeon/bird'}
    rightIcon={right}
/>
<BottomControls 
    backRoute={"/dungeon/chest"}
    bind:isRevealed
/>
