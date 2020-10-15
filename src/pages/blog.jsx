import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const blogEnabled = get(data, 'site.siteMetadata.blogEnabled', false);

  if (!blogEnabled) return null;

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} />
      {posts && posts.length && <BlogPosts posts={posts} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        blogEnabled
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
