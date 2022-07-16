module.exports = {
  siteMetadata: {
    title: `DEV1L.studio`,
    siteUrl: `https://dev1studio.github.io`,
    author: `@O612`,
    description: `O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet-async",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/O612/`,
      },
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
  ]
};
