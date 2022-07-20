module.exports = {
  siteMetadata: {
    title: `DEV1L.studio`,
    siteUrl: `https://dev1stud.io`,
    author: `@O612`,
    description: `O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet-async",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-advanced-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          site_name: 'DEV1L.studio',
        },
        twitter: {
          handle: '@O612',
          site: '@DEV1L.studio',
          cardType: 'summary_large_image',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `dev1l-studio`
      }
    },
  ],
};
