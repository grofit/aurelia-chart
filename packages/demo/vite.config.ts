import { defineConfig } from 'vite';
import aurelia from '@aurelia/vite-plugin';
import babel from '@rolldown/plugin-babel';
import path from 'path';

const aureliaResourceInclude = [
  path.posix.join(path.resolve(import.meta.dirname, 'src').replaceAll('\\', '/'), '**/*.{ts,js,html}'),
  path.posix.join(path.resolve(import.meta.dirname, '../aurelia-chart/src').replaceAll('\\', '/'), '**/*.{ts,js,html}'),
];

function decoratorPreset(options: Record<string, unknown>) {
  return {
    preset: () => ({
      plugins: [['@babel/plugin-proposal-decorators', options]],
    }),
    rolldown: {
      filter: {
        code: '@',
      },
    },
  };
}

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/aurelia-chart/' : '/',
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
    babel({ presets: [decoratorPreset({ version: '2023-11' })] }),
  ],
});
