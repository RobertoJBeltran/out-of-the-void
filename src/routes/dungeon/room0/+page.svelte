<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import gargoyle from "$lib/assets/gargoyle.svg";
    import chest from "$lib/assets/locked-chest.svg";
    import { goto } from '$app/navigation';
    import SideControls from "$lib/components/SideControls.svelte";
</script>
<div id='viewport' class='viewport'>
    <DungeonRoom />
</div>
<SideControls
    leftRoute={'/dungeon/gargoyle'}
    leftIcon={gargoyle}
    rightRoute={'/dungeon/chest'}
    rightIcon={chest}
/>
