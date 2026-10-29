<script>
	import '@fontsource/press-start-2p/latin-400.css';
	import favicon from '$lib/assets/favicon.svg';
	import background from '$lib/assets/background.png';
	let { children } = $props();
</script>

<style global>
	:global {
		*,
		*::before,
		*::after {
			box-sizing: border-box;
			margin: 0;
		}
		body {
			background-color: black;
			/*overflow: hidden;*/
			font-family: "Press Start 2P", system-ui;
			font-weight: 400;
			font-style: normal; 
			font-size: 1.3cqw;
		}
		h1 {
        	font-size: 2.2em;
    	}
		p {
			font-size: 1em;
		}
		#wrapper {
			width: 100%;
			height: 100vh;
			max-width: none;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: black;
			container-type: size;
    	}
		#wrapper-inner {
			position: relative;
			aspect-ratio: 256/173;
			max-height: 100%;
			width: 100cqw;
			max-width: calc(100cqh * (16 / 9));
			container-type: inline-size;
		}
		#background {
			z-index: 1;
			width: 100%; 
			height: 100%;
			display: block;
			image-rendering: pixelated;
		}
		#viewport {
			position: absolute;
			background-color: black;
			z-index: 2;
			top: 13.9%;
			left: 21.8%;
			width: 56.4%;
			height: 69.3%;
			color: white;
		}
		/* 1. The Viewport sets the camera distance (perspective) for dungeon rooms*/
		.viewport {
		width: 480px;
		height: 320px;
		perspective: 600px;
		background: #000;
		border: 4px solid #333;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		}
		.btn {
			font-family: "Press Start 2P", system-ui;
			background-color: #28282C;
			color: white;
			padding: 1em 2em 0.8em 2em; 
			font-size: 0.85em;
			border-radius: 10px;
			cursor: pointer;
			text-transform: uppercase;
		}
		.bottom-controls .btn:has(.button-icon) {
			padding: 0;
			
		}
		.bottom-controls {
			position: absolute;
			bottom: 5%;
			left: 21.8%;
			display: flex;
			justify-content: space-around;
			width: 56.4%;
		}
		.controls {
        position: absolute;
		}
		.side-controls {
			bottom: 45%;
		}
		.left-controls {
			left: 5%;
		}
		.right-controls {
			right: 5%;
		}
		.button-icon {
			height: 3em;
			padding: 0;
		}
		.monster {
        	position: absolute;
        	bottom: 0;
        	width: 23cqw;
    	}
		.hide {
			opacity: 0;
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
		.text-frame {
			display: flex;
			flex-direction: column;
			height: 100%;
			text-align: center;
			justify-content: center;
    	}
	}
</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main id="wrapper">
    <div id="wrapper-inner">
        <img id="background" src={background} alt="" fetchpriority="high">
		{@render children()}
    </div>
</main>

