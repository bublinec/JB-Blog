import React, { Fragment } from "react"
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
// Get posts from the file system
  const postsData =  useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            author
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`)

const postsTransformed = postsData.allMarkdownRemark.edges.map(edge => (
  <Link to={`/blog/${edge.node.fields.slug}`} key={Math.random()}>
    <li>
      <h3>{edge.node.frontmatter.title} - {edge.node.frontmatter.author}</h3>
      <p>{edge.node.frontmatter.date}</p>
    </li>
  </Link>
))


  return ( 
    <Layout>
      <Fragment>
        <h1>Blog</h1>
        <ol>
          {postsTransformed}
        </ol>
      </Fragment>
    </Layout>

   );
}
 
export default BlogPage;