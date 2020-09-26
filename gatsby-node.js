const path = require('path');

// add a new field to each markdwon node - slug with path name (gatsby/typescript etc)
// function that runs on each create node (node = file), from Gatsby Node APIs
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node, // node: node
            name: 'slug',
            value: slug
        })
    }
}

// generate page for each post
// function that dynamically generates pages, from Gatsby Node APIs
// async - new syntax for async code - instead of then - looks more sync
module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions;
    // Get absolute path to template
    blogTemplatePath = path.resolve('./src/templates/blog.tsx');

    // Get markdwon data
    const res = await graphql(`
        query MyQuery {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
      `)

    // Create new pages
    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplatePath,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                // passing data (props) to the template
                // pass only slug, the rest can be fetched in the template
                slug: edge.node.fields.slug
            }
        })
    })

}

