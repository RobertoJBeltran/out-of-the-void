<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import tree from "$lib/assets/pine-tree.svg";
    import chest from "$lib/assets/locked-chest.svg";
    import { goto } from '$app/navigation';
</script>
<div id='viewport' class='viewport'>
    <DungeonRoom />
</div>
<div class="left-controls side-controls controls">
    <button type=button class="start btn" onclick={()=>{goto('/dungeon/room0')}}>
        <img class="button-icon" src={tree} alt="tree"/>
    </button>
</div>
<div class="right-controls side-controls controls">
    <button type=button class="start btn" onclick={()=>{goto('/dungeon/chest')}}>
        <img class="button-icon" src={chest} alt="chest"/>
    </button>
</div>