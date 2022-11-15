require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require("./package.json");

module.exports = {
  plugins: [
    "gatsby-plugin-resolve-src",
    {
      resolve: `gatsby-source-graphql`,
      options: {
        url: process.env.GRAPHQL_ENDPOINT,
        fieldName: `amplify`,
        typeName: `AMPLIFY`,
        headers: {
          'x-api-key': process.env.GRAPHQL_KEY
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: ['en', 'de'],
        defaultLanguage: 'en',
        siteUrl: process.env.SITE_URL,
        redirect: true,
        i18nextOptions: {
          interpolation: {
            escapeValue: false 
          },
          keySeparator: false,
          nsSeparator: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
  ],
}
