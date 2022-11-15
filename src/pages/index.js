import { graphql } from "gatsby"
import React from "react"
import { Link } from 'gatsby-plugin-react-i18next';
import Layout from "components/Layout";
import { Container } from "react-bootstrap";

const IndexPage = ({ data }) => {

  return (
    <Layout pageName="index">
      <Container>
        <br />
        <h1>Amplify Gatsby i18n Example</h1>
        {data.amplify.listContentItems.items.map((item) => (
          <Link to={`/items/${item.url_slug}`}>
            <h2>
              {item.ContentItemLocalisations.items[0].item_title}
            </h2>
          </Link>
        ))}
      </Container>
    </Layout>
  );
};

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
          ContentItemLocalisations(filter: {locale: {eq: $language}}) {
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
