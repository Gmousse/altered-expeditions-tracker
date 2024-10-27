// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    css: ["normalize.css/normalize.css"],
    typescript: { typeCheck: true },
    modules: ["@nuxt/image", "@nuxt/icon", "@nuxt/ui"],
    hooks: {
        "prerender:routes"({ routes }) {
            routes.clear(); // Do not generate any routes (except the defaults)
        },
    },
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            link: [
                { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
                {
                    rel: "manifest",
                    href: "manifest.json",
                    crossorigin: "use-credentials",
                },
            ],
        },
    },
});
