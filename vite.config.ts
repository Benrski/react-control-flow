import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'ReactControlFlow',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: { react: 'React' },
      },
    },
  },
});
