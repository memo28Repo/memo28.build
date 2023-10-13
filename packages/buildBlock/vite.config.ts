/*
 * @Author: 邱狮杰&qwm
 * @Date: 2023-09-27 09:28:21
 * @LastEditTime: 2023-10-04 22:49:48
 * @Description: 
 * @FilePath: /buildingBlocks/vite.config.ts
 */
import { Engine } from '@memo28/vitebuild'
import { defineConfig } from 'vite'

const config = new Engine().setTechnologyStack('react').addPlugins(plugins => {
  plugins.addAlias()
}).getBuildConfig({
  optimizeDeps: {
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  ...config
})
