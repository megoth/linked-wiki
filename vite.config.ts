import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import rehypeTitleIds from "./src/rehype-plugins/title-ids";
import rehypeContentIds from "./src/rehype-plugins/content-ids";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        {
            enforce: 'pre', ...mdx({
                rehypePlugins: [
                    rehypeTitleIds,
                    rehypeContentIds,
                ]
            }),
        },
        react(),
    ],
})
