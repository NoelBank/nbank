import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Imprint = ({ data: { imprint } }) => (
  <Layout>
    <article className="sheet">
      {console.log(imprint.edges[0].node)}
      <div className="sheet__inner">
        <h1 className="sheet__title">{imprint.edges[0].node.title}</h1>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: imprint.edges[0].node.imprint
          }}
        />
      </div>
    </article>
  </Layout>
);

export default Imprint;

export const query = graphql`
  query ImprintQuery {
    imprint: allDatoCmsImprintPage {
      edges {
        node {
          title
          imprint
        }
      }
    }
  }
`;
