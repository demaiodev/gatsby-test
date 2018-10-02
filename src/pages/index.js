import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PostListing from '../components/Posts/PostListing';

import Layout from '../components/layout';

const IndexPage = ({data}) => (
  <Layout>
    
    <p>{data.site.siteMetadata.title}</p>
    {data.allMarkdownRemark.edges.map(({node}) => {
      return <PostListing key={node.id} post={node} />
    })}
  </Layout>
);

export default IndexPage;

export const query = graphql`
query TestQuery{
  site{
    siteMetadata{
      title
      desc
    }
  }
  allMarkdownRemark(sort: {
    fields: [frontmatter___date],
    order: DESC
  }) {
    edges{
      node{
        id
        frontmatter{
          title
          date
        }
        html
        excerpt
      }
    }
  }
}
`;
