import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import rehypeTitleIds from "./src/rehype-plugins/title-ids";
import rehypeContentIds from "./src/rehype-plugins/content-ids";
import rehypeLinkReferences from "./src/rehype-plugins/link-references";
import rehypeMainTitleProperty from "./src/rehype-plugins/main-title-property";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        {
            enforce: 'pre', ...mdx({
                rehypePlugins: [
                    rehypeMainTitleProperty,
                    rehypeTitleIds,
                    rehypeContentIds,
                    rehypeLinkReferences,
                ]
            }),
        },
        react(),
    ],
})
