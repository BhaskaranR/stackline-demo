import { resolve } from 'path'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import React from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    React(),
    Pages({
      dirs: [{ dir: 'src/features/analytics/pages', baseRoute: '' }],
    }),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      customCollections: {
        custom: FileSystemIconLoader('./src/assets/icons'),
      },
    }),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: true,
    }),
  ],
  test: {
    environment: 'jsdom',
  },
})
