import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import bundleSize from 'rollup-plugin-bundle-size'

const src = (file) => `src/${file}`
const dist = (file) => `dist/lib/${file}`

const bundle = (config) =>
  defineConfig({
    ...config,
    input: src('index.ts'),
    external: (id) => !/^[./]/.test(id),
    plugins: [
      ...(config.plugins || []),
      bundleSize()
    ]
  })

const config = defineConfig([
  bundle({
    plugins: [esbuild(), terser()],
    output: [
      {
        file: dist('index.js'),
        format: 'cjs',
      },
    ],
  }),
  bundle({
    plugins: [esbuild(), terser()],
    output: [
      {
        file: dist('index.mjs'),
        format: 'es',
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: [
      {
        file: dist('index.d.ts'),
        format: 'es',
      },
    ],
  }),
  {
    input: 'src/styles.scss',
    output: {
      file: dist('styles.css'),
      format: 'es',
    },
    plugins: [postcss({ extract: true })],
  },
])

export default config
