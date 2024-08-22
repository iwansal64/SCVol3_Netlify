import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true }
    }),
});
