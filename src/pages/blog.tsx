import React, { Fragment } from "react"
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
// Get posts from the cms
const postsData =  useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: {fields: date, order: ASC}) {
        edges {
          node {
            slug
            title
            date(fromNow: true)
          }
        }
      }
    }
`)

const postsTransformed = postsData.allContentfulBlogPost.edges.map(edge => (
<Link to={`/blog/${edge.node.slug}`} key={Math.random()}>
<li>
  <h3>{edge.node.title}</h3>
  <p>{edge.node.date}</p>
</li>
</Link>
));

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