<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import monster from "$lib/assets/bandit.png";
    import bandit from "$lib/assets/bandit3.png";
    import left from "$lib/assets/raise-zombie.svg";
    import right from "$lib/assets/mirror-mirror.svg";
    import SideControls from "$lib/components/SideControls.svelte";
    import BottomControls from "$lib/components/BottomControls.svelte";

    let isRevealed = $state(true);

</script>
<style>
    .bandit {
        left: 11%;
    }
    .lackey {
        right: 11%;
    }
</style>
<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={monster} class="monster lackey" class:hide={!isRevealed} alt="" />
    <img src={bandit} class="monster bandit" class:hide={!isRevealed} alt="" />
</div>
<BottomControls 
    backRoute={"/dungeon/tomb"}
    bind:isRevealed
/>
