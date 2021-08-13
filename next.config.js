const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const withPWAFeature = require("next-pwa");

module.exports = withFonts(
  withOptimizedImages(
    withPWAFeature({
      pwa: {
        dest: "/public",
        swSrc: "service-worker.js",
      },
      i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ["en", "de"],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: "en",
      },
    }),
    {
      basePath: "/out",
      poweredByHeader: false,
      serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: "secret",
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: "/build",
      },

      async rewrites() {
        return [
          {
            source: "/",
            destination: "/home",
          },
        ];
      },
    }
  )
);
