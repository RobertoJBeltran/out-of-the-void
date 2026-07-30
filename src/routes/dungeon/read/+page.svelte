<script>
    import BottomControls from "$lib/components/BottomControls.svelte";

</script>
<style>
    .text-frame {
        padding: 2em;
        line-height: 1.7;
    }
</style>
<div id="viewport" >
    <div class="text-frame">
        <p>
            Here rest all who have been destroyed and defiled in a war against the vile aberration that once ravaged our lands. May it stay imprisoned in this dungeon forever.
        </p> 
    </div>
</div>
<BottomControls
    backRoute={"/dungeon/tomb"}
/>