const nextTranslate = require('next-translate')

/**
 * @type {import('next').NextConfig}
 **/
module.exports = nextTranslate({
  webpack: (
    /** @type {{ resolve: { fallback: { fs: boolean; module: boolean; }; }; module: { rules: { test: RegExp; use: { loader: string; }; }[]; }; }} */ config
  ) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false }

    return config
  },
  images: {
    domains: ['wpcdn-stg.pubgesports.com']
  },
  env: {
    WORDPRESS_GRAPHQL_URI: process.env.WORDPRESS_GRAPHQL_URI,
    WORDPRESS_GRAPHQL_TOKEN: process.env.WORDPRESS_GRAPHQL_TOKEN,
    MAILJET_API_KEY: process.env.MAILJET_API_KEY,
    MAILJET_SECRET_KEY: process.env.MAILJET_SECRET_KEY,
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    REDIS_URI: process.env.REDIS_URI,
    REDIS_TTL_KEY: process.env.REDIS_TTL_KEY
  },
  poweredByHeader: false
})
