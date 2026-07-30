<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import blue from "$lib/assets/head-blue.png";
    import red from "$lib/assets/head-red.png";
    import yellow from "$lib/assets/head-yellow.png";
    import BottomControls from "$lib/components/BottomControls.svelte";

    let isRevealed = $state(true);
    let index = Math.floor(Math.random() * 3);
    let heads = [blue, red, yellow];
    let monster = heads[index];

</script>
<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={monster} class="monster" alt="" />
</div>
<BottomControls 
    backRoute={"/dungeon/minotaur"}
    bind:isRevealed
/>