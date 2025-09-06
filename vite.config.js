import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Project site: served at https://<username>.github.io/ameyarele/
    base: '/ameyarele/',
});
