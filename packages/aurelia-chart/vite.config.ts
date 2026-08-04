import { defineConfig } from 'vite';
import aurelia from '@aurelia/vite-plugin';
import babel from '@rolldown/plugin-babel';

const externalPackages = [
  '@aurelia',
  'aurelia',
  'chart.js',
  'chartjs-adapter-date-fns',
  'chartjs-plugin-annotation',
  'date-fns',
  'tslib',
];

function isExternal(id: string): boolean {
  return externalPackages.some(pkg => id === pkg || id.startsWith(`${pkg}/`));
}

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
  root: 'src',
  plugins: [
    aurelia({ include: '**/*.{ts,js,html}' }),
    babel({ presets: [decoratorPreset({ version: '2023-11' })] }),
  ],
  build: {
    outDir: '../dist',
    target: 'es2022',
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      entry: 'index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    rolldownOptions: {
      external: isExternal,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
    },
  },
});
