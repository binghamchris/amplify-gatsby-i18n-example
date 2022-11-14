import React from 'react'
import { graphql } from 'gatsby'

const ItemPage = ({ data }) => {
  const item = data.amplify.getContentItem
  return (
    <body>
      <h1>{item.ContentItemLocalisations.items[0].item_title}</h1>
      <p>{item.ContentItemLocalisations.items[0].item_body}</p>
    </body>
  )
}

export default ItemPage

export const itemQuery = graphql`
query ($id: ID!) {
  amplify {
    getContentItem(id: $id) {
      url_slug
      id
      ContentItemLocalisations(filter: {locale: {eq: DE}}) {
        items {
          locale
          item_title
          item_body
        }
      }
    }
  }
}`