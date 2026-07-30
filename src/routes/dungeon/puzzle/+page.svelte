<script>
    import DungeonRoom from "$lib/components/DungeonRoom.svelte";
    import monster from "$lib/assets/puzzlemachine.png";
    import left from "$lib/assets/magic-potion.svg";
    import sword from '$lib/assets/sword-brandish.svg';
    import skull from '$lib/assets/skull-white.svg';
    import right from "$lib/assets/gold-stack.svg";
    import SideControls from "$lib/components/SideControls.svelte";
    import BottomControls from "$lib/components/BottomControls.svelte";
    import { goto } from "$app/navigation";
    let isSolved = $state(false)

</script>
<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={monster} class="monster" alt="" />
</div>
<div class="left-controls side-controls controls">
    <button type=button class="start btn" onclick={()=>{goto("/dungeon/necromancer")}}>
        <img class="button-icon" src={left} alt=""/>
    </button>
</div>
<div class="right-controls side-controls controls">
    <button type=button class="start btn" onclick={()=>{goto("/dungeon/loot")}} class:hide={!isSolved}>
        <img class="button-icon" src={right} alt=""/>
    </button>
</div>
<div class="bottom-controls">
    <button class="btn" type="button">
        <img class="button-icon" src={sword} alt="">
    </button>
    <button class="btn" type="button" onclick={()=>{isSolved = true;}} >
        Solve
    </button>
    <button class="btn" type="button" onclick={()=>{goto('/dungeon/chest')}}>
        Back
    </button>
    <button type=button class="start btn" onclick={()=>{goto('/dungeon')}}>
        <img class="button-icon" src={skull} alt="skull"/>
    </button>
</div>

