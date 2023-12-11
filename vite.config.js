import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "https://r3ptargreen.github.io/ShopWave-DemoE-commerce-project/",
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import 'src/global/mixins/mixins.scss';`,
			},
		},
	},
});
