import { vitePlugin as remix } from '@remix-run/dev';
import path from 'node:path';
import { flatRoutes } from 'remix-flat-routes';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    remix({
      appDirectory: 'src/app',
      ignoredRouteFiles: ['**/*'],
      routes: async (defineRoutes) => {
        return flatRoutes('routes', defineRoutes, {
          appDir: 'src/app',
        });
      },
      serverModuleFormat: 'esm',
    }),
  ],
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/'),
    },
  },
  test: {
    testTimeout: 30_000,
  },
});