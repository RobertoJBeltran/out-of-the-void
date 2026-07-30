<script>
    import sword from '$lib/assets/sword-brandish.svg';
    import skull from '$lib/assets/skull-white.svg';
    import { goto } from '$app/navigation';

    let {isRevealed = $bindable(), backRoute, action, actionLabel} = $props(); 
</script>
<div class="bottom-controls">
    <button class="btn" type="button" onclick={()=>{isRevealed = false;}}>
        <img class="button-icon" src={sword} alt="">
    </button>
    {#if action }
    <button class="btn" type="button" onclick={()=>{goto(action)}}>
        {actionLabel}
    </button>
    {/if}
    <button class="btn" type="button" onclick={()=>{goto(backRoute)}}>
        Back
    </button>
    <button type=button class="start btn" onclick={()=>{goto('/dungeon')}}>
        <img class="button-icon" src={skull} alt="skull"/>
    </button>
</div>