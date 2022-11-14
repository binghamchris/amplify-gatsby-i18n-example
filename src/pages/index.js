import { graphql, Link } from "gatsby"
import React from "react"

const IndexPage = ({ data }) => (
  <div>
    <h1>Amplify i18n Example</h1>
    {data.amplify.listContentItems.items.map((item, i) => (
      <Link key={i} to={`items/${item.url_slug}`}>
        <h2>
          {item.url_slug}
        </h2>
     </Link>
    ))}
  </div>
)

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {language: {eq: $language}}
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    amplify {
      listContentItems {
        items {
          id
          url_slug
          ContentItemLocalisations {
            items {
              locale
              item_title
              item_body
            }
          }
        }
      }
    }
  }
`
