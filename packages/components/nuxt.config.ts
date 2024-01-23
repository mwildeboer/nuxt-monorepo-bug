import { fileURLToPath } from 'node:url';
import { defineNuxtModule, addComponentsDir } from '@nuxt/kit';

export default defineNuxtConfig({
    modules: [
        defineNuxtModule({
            async setup() {
                const componentsDirs = ['base'];

                for (const dir of componentsDirs) {
                    await addComponentsDir({
                        path: fileURLToPath(new URL(`./src/${dir}`, import.meta.url)),
                        pattern: '**/*.vue',
                        pathPrefix: false,
                    });
                }
            },
        }),
    ],
    typescript: {
        tsConfig: {
            compilerOptions: {
                verbatimModuleSyntax: false,
            },
        },
    },
});
