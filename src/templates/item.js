import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";

const ItemPage = ({ data }) => {
  const item = data.amplify.getContentItem
  return (
    <Layout pageName="content-item">
      <Container>
        <br />
        <h1>{item.ContentItemLocalisations.items[0].item_title}</h1>
        <p>{item.ContentItemLocalisations.items[0].item_body}</p>
      </Container>
    </Layout>
  )
}

export default ItemPage

export const itemQuery = graphql`
query ($id: ID!, $language: String!) {
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
    getContentItem(id: $id) {
      url_slug
      id
      ContentItemLocalisations(filter: {locale: {eq: $language}}) {
        items {
          locale
          item_title
          item_body
        }
      }
    }
  }
}`