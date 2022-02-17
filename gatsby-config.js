module.exports = {
  siteMetadata: {
    title: 'Carsten Horn'
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CF_SPACE || '8jzh9bya95xd',
        accessToken: process.env.CF_TOKEN || '50dfc5b584292518e2d1956b5173c544e54993e909b1fda82b0d92f5c528ed71'
      }
    },
    '@contentful/gatsby-transformer-contentful-richtext',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Carsten Horn',
    //     short_name: 'Horn',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui'
    //   }
    // },
    'gatsby-plugin-offline'
  ]
}
