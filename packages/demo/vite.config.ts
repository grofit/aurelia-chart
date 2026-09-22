import { defineConfig } from 'vite';
import aurelia from '@aurelia/vite-plugin';
import babel, { defineRolldownBabelPreset } from '@rolldown/plugin-babel';
import path from 'path';

const aureliaResourceInclude = [
  path.posix.join(path.resolve(import.meta.dirname, 'src').replaceAll('\\', '/'), '**/*.{ts,js,html}'),
  path.posix.join(path.resolve(import.meta.dirname, '../aurelia-chart/src').replaceAll('\\', '/'), '**/*.{ts,js,html}'),
];

const decoratorPreset = defineRolldownBabelPreset({
  preset: () => ({
    plugins: [['@babel/plugin-proposal-decorators', { version: '2023-11' }]],
  }),
  rolldown: {
    filter: {
      code: '@',
    },
  },
});

export default defineConfig({
  resolve: {
    alias: [
      { find: /^aurelia-chart$/, replacement: path.resolve(import.meta.dirname, '../aurelia-chart/src/index.ts') },
    ],
  },
  server: {
    open: true,
    port: 9000,
  },
  plugins: [
    aurelia({ useDev: true, include: aureliaResourceInclude }),
    babel({ presets: [decoratorPreset] }),
  ],
});
