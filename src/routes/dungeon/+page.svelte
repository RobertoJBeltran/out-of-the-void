<script>
     import prison from '$lib/assets/prison.png'
     import wizard from '$lib/assets/wizard.png'
     import death from '$lib/assets/death.png'
     import { onMount } from 'svelte';
    import DungeonRoom from '$lib/components/DungeonRoom.svelte';
        import { goto } from '$app/navigation';
        
    // false = show base image, true = show flicker image
    let isFlickering = $state(false);

    onMount(() => {
    let timeoutId;

    // 2. This function handles the rapid back-and-forth toggles
    const executeBurst = (togglesLeft) => {
      if (togglesLeft <= 0) {
        // Burst is finished. Ensure we are resting on the base image.
        isFlickering = false;
        // Start the long wait for the next burst
        scheduleNextBurst();
        return;
      }

      // Flip the state back and forth
      isFlickering = !isFlickering;

      // Extremely short random duration for each flash (e.g., 30ms to 90ms)
      const flashDuration = Math.random() * 60 + 60;

      timeoutId = setTimeout(() => {
        executeBurst(togglesLeft - 1);
      }, flashDuration);
    };

    // 1. This function handles the long wait between events
    const scheduleNextBurst = () => {
      // Long wait time (e.g., 2 to 7 seconds)
      const waitTime = Math.random() * 5000 + 7000;

      timeoutId = setTimeout(() => {
        // Pick an EVEN number of toggles (e.g., 4, 6, or 8)
        // Even numbers ensure the burst naturally finishes on the base image
        const totalToggles = (Math.floor(Math.random() * 3) + 2) * 2; 
        
        executeBurst(totalToggles);
      }, waitTime);
    };

    // Kick off the cycle
    scheduleNextBurst();
    
    // Cleanup prevents memory leaks if the component unmounts mid-burst
    return () => clearTimeout(timeoutId);
  });
</script>
<style>
    .prison {
        width: 100%;
        z-index: 4;
        position: absolute;
    }
    .monster {
        position: absolute;
        bottom: 0;
        width: 23cqw;
    }
    .wizard {
        width: 28cqw;
        left: 20%;
        bottom: -20px;
        will-change: opacity;
    }
    .death {
        will-change: opacity;
    }
    .hide {
        opacity: 0;
    }
</style>
  <div id="viewport" class="viewport">
    <DungeonRoom />
    <img src={wizard} alt="wizard" class="wizard monster " class:hide={isFlickering}/>
    <img src={death} alt="death" class="death monster " class:hide={!isFlickering} />
    <img src={prison} alt="prison bars" class="prison"/>

  </div>
  <div class="bottom-controls">
    <button type=button class="start btn" onclick={()=>{goto('/dungeon/room0')}}>
        Start
    </button>
  </div>
