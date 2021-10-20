# Monoid TypeScript NPM Boilerplate

A TypeScript NPM boilerplate that suits how we usually write TypeScript. 

## Features

1. Outputs modern style typescript package in `dist/{cjs,esm,types}/` using `tsc` and `esbuild`.

2. Test or demonstrate your package under `demo/{node,browser}/`.

3. Only files under `dist/` will be published to npm.

4. `dist/` will NOT be gitignored by default.

5. `.eslintrc.js` based on [airbnb](https://www.npmjs.com/package/eslint-config-airbnb-typescript).

## Commands

```bash
  yarn build-all
```

Build the output directory.

## Customization

1. Find `ts-npm-boilerplate`, replace that with your package name.

2. Find `your-cli-name`, replace that with your cli name.

## Usage

1. Degit this repository

```
npx degit https://github.com/MonoidDev/ts-npm-boilerplate
```

2. Use this template

Click the green button `Use this template` on the top-right side of this GitHub repository (https://github.com/MonoidDev/ts-npm-boilerplate).


