<script>
    import chest from '$lib/assets/chest.png';
    import snake from '$lib/assets/snake.png';
    import sword from '$lib/assets/sword-brandish.svg';
    import DungeonRoom from '$lib/components/DungeonRoom.svelte';
    import skull from '$lib/assets/skull-white.svg';
    import { goto } from '$app/navigation';
    import SideControls from '$lib/components/SideControls.svelte';
    import left from "$lib/assets/minotaur.svg";
    import right from "$lib/assets/gear-stick-pattern.svg";
    let isRevealed = $state(false);
</script>

<style>
    .hide {
        opacity: 0;
    }
</style>

<div id='viewport' class='viewport'>
    <DungeonRoom />
    <img src={chest} alt="chest" class="monster" />
    <img src={snake} alt="snake" class="monster snake" class:hide={!isRevealed}/>
</div>
<SideControls
    leftRoute="/dungeon/minotaur"
    leftIcon={left}
    rightRoute='/dungeon/puzzle'
    rightIcon={right}
/>
<div class="bottom-controls">
    <button class="btn" type="button" onclick={()=>{isRevealed = false;}}>
        <img class="button-icon" src={sword} alt="">
    </button>
    <button class="btn" type="button" onclick={()=>{isRevealed = true;}} >Open</button>
    <button class="btn" type="button" onclick={()=>{goto('/dungeon/room0')}}>
        Back
    </button>
    <button type=button class="start btn" onclick={()=>{goto('/dungeon')}}>
        <img class="button-icon" src={skull} alt="skull"/>
    </button>
</div>
