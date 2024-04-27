import { defineConfig, Options } from 'tsup'

export default defineConfig((options: Options) => ({
	...options,
	entry: ['src/**/*.tsx', 'src/**/*.ts'],
	format: ['esm'],
	esbuildOptions(options) {
		options.banner = {
			js: '"use client"',
		}
	},
	dts: true,
	minify: true,
	external: ['react'],
}))
