<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import monster from "$lib/assets/tomb.png";
    import left from "$lib/assets/3d-stairs.svg";
    import right from "$lib/assets/sarcophagus.svg";
    import SideControls from "$lib/components/SideControls.svelte";
    import BottomControls from "$lib/components/BottomControls.svelte";

    let isRevealed = $state(true);

</script>
<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={monster} class="monster" alt="" />
</div>
<SideControls
    leftRoute={'/dungeon/stairs'}
    leftIcon={left}
    rightRoute={'/dungeon/bandits'}
    rightIcon={right}
/>
<BottomControls 
    backRoute={"/dungeon/zombie"}
    bind:isRevealed
    actionLabel={'Read'}
    action={'/dungeon/read'}
/>
