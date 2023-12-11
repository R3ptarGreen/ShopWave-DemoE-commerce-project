import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/ShopWave-DemoE-commerce-project/',
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import 'src/global/mixins/mixins.scss';`,
			},
		},
	},
});
