import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			output: {
				// One JS bundle for the whole app: the module graph is a single request
				// discovered from the HTML, eliminating the HTML → app.js → nodes → chunks waterfall.
				// Note: with 'single', all CSS is emitted as one external <link rel="stylesheet">
				// (CSS inlining via inlineStyleThreshold only applies to the default 'split').
				bundleStrategy: 'single'
			}
		})
	],
	build: {
		// Base64-inline the Press Start 2P woff2 (12.4 KB) into the app CSS so the font
		// ships with the stylesheet — no font request, no font-display swap flash.
		assetsInlineLimit: (filePath) => (filePath.endsWith('.woff2') ? true : undefined)
	}
});
