import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import notifier from 'vite-plugin-notifier'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), notifier()]
})
