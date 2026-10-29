<div class="dungeon-room">
    <div class="surface wall-back"></div>
    <div class="side-corridor left-corridor">
        <div class="surface side-back" ></div>
        <div class="surface side-floor" ></div>
        <div class="surface side-ceiling" ></div>
    </div>
    <div class="side-corridor right-corridor">
        <div class="surface side-back" ></div>
        <div class="surface side-floor" ></div>
        <div class="surface side-ceiling"></div>
    </div>
    <div class="surface floor"></div>
    <div class="surface ceiling"></div>
</div>

<style>
    /* The 3D Scene container holds all room geometry */
    .dungeon-room {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      /* Simulates looking down the corridor */
      transform: translateZ(100px);
    }

    /* Common styles for walls, floor, and ceiling */
    .surface {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    /* Back Wall */
    .wall-back {
      background-image:
        radial-gradient(circle at center, rgba(0,0,0,0) 20%, rgba(0,0,0,0.85) 90%),
        linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
        url('$lib/assets/Brick8.png');
      transform: translateZ(-500px);
    }
    /*
    .wall-left {
      background-image: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.8)), url('$lib/assets/Brick8.png');
      transform-origin: left center;
      transform: rotateY(90deg);
    }
    .wall-right {
      background-image: linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.8)), url('$lib/assets/Brick8.png');
      transform-origin: right center;
      transform: rotateY(-90deg);
    }*/

    /* Floor */
    .floor {
      background-image: linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.9)), url('$lib/assets/floor.png');
      transform-origin: center bottom;
      transform: rotateX(90deg) translateY(5px);
    }

    /* Ceiling */
    .ceiling {
      background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.95)), url('$lib/assets/ceiling.png');
      transform-origin: center top;
      transform: rotateX(-90deg) translateY(-5px);
    }
    /* Container for the side passage, shifted into the adjacent grid cell */
    .side-corridor {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }

    /* Position left side passage extending outward to the left */
    .left-corridor {
        transform: translateX(-800px);
        transform-origin: right center;
    }

    /* Position right side passage extending outward to the right */
    .right-corridor {
        transform: translateX(800px);
        transform-origin: left center;
    }

    /* Back wall of the side corridor, heavily shaded for deep perspective */
    .side-back {
        transform: translateZ(-500px);
        background-image:
            linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.22) 100%),
            /* Vertical shadow falloff: darker near the ceiling and floor */
            linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.8) 100%),
            url('$lib/assets/Brick8.png');
            border-left: none;
            border-right: none;
    }

    /* Side corridor floor maintaining perspective alignment */
    .side-floor {
        transform-origin: center bottom;
        transform: rotateX(90deg) translateY(0px);
        background-image:
            linear-gradient(to top, rgba(0,0,0,0.1), rgba(0,0,0,0.95)),
            url('$lib/assets/floor.png');
    }

    /* Side corridor ceiling */
    .side-ceiling {
        transform-origin: center top;
        transform: rotateX(-90deg) translateY(-5px);
        background-image:
            linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.95)),
            url('$lib/assets/ceiling.png');
    }
</style>
