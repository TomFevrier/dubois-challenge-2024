import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default {
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import './src/variables.scss';`
			},
			postcss: {
				plugins: [autoprefixer()]
			}
		})
	],
	extensions: ['.svelte'],
	kit: {
		adapter: adapter(),
		files: {
			lib: path.resolve('./src/lib')
		},
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/dubois-challenge-2024' : '',
        }
	},
};