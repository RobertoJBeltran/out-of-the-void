<script>
    import { goto } from "$app/navigation";
    let {leftRoute, leftIcon, rightRoute, rightIcon} = $props();
</script>

<div class="left-controls side-controls controls">
    <button type=button class="start btn" onclick={()=>{goto(leftRoute)}}>
        <img class="button-icon" src={leftIcon} alt=""/>
    </button>
</div>
<div class="right-controls side-controls controls">
    <button type=button class="start btn" onclick={()=>{goto(rightRoute)}}>
        <img class="button-icon" src={rightIcon} alt=""/>
    </button>
</div>