import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config.ts';

const packageRoot = fileURLToPath(new URL('./', import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    root: packageRoot,
    test: {
      environment: 'jsdom',
      watch: false,
      exclude: [...configDefaults.exclude, 'e2e/*'],
      setupFiles: ['./test/setup.ts'],
    },
  }),
);
