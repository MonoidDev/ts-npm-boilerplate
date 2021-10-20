/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

[
  {
    outdir: 'dist/esm',
    format: 'esm',
    outExtension: {
      '.js': '.mjs',
    },
  },
  {
    outdir: 'dist/cjs',
    format: 'cjs',
    outExtension: {
      '.js': '.cjs',
    },
  },
].map((opts) => esbuild.build({
  entryPoints: [
    'src/cli.ts',
    'src/index.ts',
  ],
  bundle: true,
  platform: 'node',
  plugins: [nodeExternalsPlugin()],
  ...opts,
}));

