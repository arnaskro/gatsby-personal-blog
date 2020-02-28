require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Kromelis.lt - Arnas Kromelis personal website`,
    siteDescription: `Arnas Kromelis personal website`,
    siteTitle: `Arnas Kromelis`,
    siteHeadline: `Site Headline`,
    siteUrl: `https://kromelis.lt`,
    siteLanguage: `en`,
    siteImage: `/logo-black.png`,
    author: `Arnas Kromelis`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/arnas-kromelis-676924a2/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/arnaskro`,
          },
          {
            name: `Email`,
            url: `mailto:arnas@kromelis.lt`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arnas Kromelis`,
        short_name: `kromelis-lt`,
        description: `Arnas Kromelis personal portfolio blog.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#333`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
