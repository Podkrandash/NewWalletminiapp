import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            react: resolve(__dirname, './node_modules/react'),
            'react-dom': resolve(__dirname, './node_modules/react-dom'),
            '@ton/core': resolve(__dirname, '../../packages/core/node_modules/@ton/core'),
            '@ton/crypto': resolve(__dirname, '../../packages/core/node_modules/@ton/crypto'),
            '@ton/ton': resolve(__dirname, '../../packages/core/node_modules/@ton/ton'),
            'react-router-dom': resolve(__dirname, './node_modules/react-router-dom'),
            'styled-components': resolve(__dirname, './node_modules/styled-components'),
            'react-i18next': resolve(__dirname, './node_modules/react-i18next'),
            '@tanstack/react-query': resolve(__dirname, './node_modules/@tanstack/react-query')
        }
    },
    build: {
        outDir: 'dist',
        sourcemap: true,
        rollupOptions: {
            external: ['react/jsx-runtime'],
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    'react-router': ['react-router-dom']
                }
            }
        }
    },
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'react/jsx-runtime'
        ],
        esbuildOptions: {
            target: 'es2020'
        }
    }
});
