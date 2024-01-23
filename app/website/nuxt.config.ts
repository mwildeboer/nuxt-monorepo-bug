export default defineNuxtConfig({
    extends: ['@nuxt-monorepo-bug/components/nuxt.config'],
    typescript: {
        shim: false,
        tsConfig: {
            compilerOptions: {
                verbatimModuleSyntax: false,
            },
        },
    },
    devtools: {
        enabled: process.env.NUXT_DEVTOOLS_ENABLED === 'true',
    },
    experimental: {
        crossOriginPrefetch: true,
        clientFallback: true,
        asyncContext: true,
        headNext: true,
    },
    modules: ['@nuxt/devtools'],
    imports: {
        dirs: ['./composables/**/use*.ts'],
    },
});
