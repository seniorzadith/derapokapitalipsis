module.exports = {
  siteMetadata: {
    title: "apodaskapitalipsis",
    description:
      "Dibujos, caligrafías y volúmenes viables e inviables que conforman la obra reciente de Peli dedicada a la alquimia, el zen, el arte y la realpolitik en medio de la debacle",
    author: "Peli",
    twitterUsername: "@peli_ccs",
    image: "default.png",
    siteUrl: "https://apodaskapitalipsis.netlify.app",    
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-graphcms',
      options: {        
        endpoint: 'https://api-us-east-1.graphcms.com/v2/cki53c0719qo801z0bi9g91rm/master',
        downloadLocalImages: true,
        buildMarkdownNodes: true,
      },
    },    
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://apodaskapitalipsis.netlify.app',
        sitemap: 'https://apodaskapitalipsis.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },    
    `gatsby-plugin-mdx`,
    `gatsby-plugin-styled-components`,    
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,    
  ],
}
