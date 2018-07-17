import { uglify } from 'rollup-plugin-uglify'
import commonJs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import { minify } from 'uglify-es'

const pkg = require('./package.json')

const env = process.env.NODE_ENV

const config = {
  input: 'src/index.ts',
  plugins: [
    typescript({
			typescript: require('typescript'),
    }),
    resolve({
			jsnext: true,
			browser: true,
		}),
    commonJs()
  ],
  output: [
    { name: 'safe-storage', file: pkg.browser, format: 'umd', exports: 'named', sourcemap: true },
		{ file: pkg.main, format: 'cjs', exports: 'named', sourcemap: true },
    { file: pkg.module, format: 'es', exports: 'named', sourcemap: true }
  ]
}

if (env === 'production') {
  config.plugins.push(uglify({
    compress: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      warnings: false,
    },
  }, minify))
}

export default [config]
