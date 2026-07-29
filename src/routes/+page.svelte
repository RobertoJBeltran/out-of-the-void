<script>
    import { goto } from '$app/navigation';
    import skull from '$lib/assets/skull-white.svg';
    let isShaking = $state(false);

    $effect(() => {
        let timeoutId;

        function scheduleNextShake() {
        // Generate a random delay between 3 and 7 seconds (3000ms to 7000ms)
        const randomDelay = Math.random() * 4000 + 3000;

        timeoutId = setTimeout(() => {
            isShaking = true;

            // Keep shaking for 500ms, then stop and schedule the next one
            setTimeout(() => {
            isShaking = false;
            scheduleNextShake();
            }, 200);
        }, randomDelay);
        }

        scheduleNextShake();

        // Clean up the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    });
</script>

<style>
    .text-frame {
        display: flex;
        flex-direction: column;
        height: 100%;
        text-align: center;
        justify-content: center;
    }
    p {
        margin: 2em;
    }
    
    @keyframes pixel-shake {
        0% { transform: translate(0, 0); }
        20% { transform: translate(-3px, 1px); }
        40% { transform: translate(3px, -2px); }
        60% { transform: translate(-2px, -1px); }
        80% { transform: translate(2px, 2px); }
        100% { transform: translate(0, 0); }
    }

    /* Apply this class to the overlay div whenever you want it to shake */
    #viewport.isshaking {
        animation: pixel-shake 0.25s ease-in-out infinite;
    }
    .skull {
        height: 3em;
    }
</style>

<div id="viewport" class:isshaking={isShaking}>
    <div class="text-frame">
        <p>Nerds Know Presents:</p>
        <h1>
            Out of the Void
        </h1>
        <p>by Evil Schemer</p>
        <img class="skull" src={skull} alt="">
    </div>
</div>
<div class="bottom-controls">
    <button type=button class="start btn" onclick={()=>{goto('/dungeon')}}>
        Start
    </button>
</div>