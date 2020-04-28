import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Privacy = ({ data: { privacy } }) => (
  <Layout>
    <article className="sheet">
      {console.log(privacy.edges[0].node)}
      <div className="sheet__inner">
        <h1 className="sheet__title">{privacy.edges[0].node.title}</h1>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: privacy.edges[0].node.privacy
          }}
        />
      </div>
    </article>
  </Layout>
);

export default Privacy;

export const query = graphql`
  query PrivacyQuery {
    privacy: allDatoCmsPrivacyPage {
      edges {
        node {
          title
          privacy
        }
      }
    }
  }
`;
