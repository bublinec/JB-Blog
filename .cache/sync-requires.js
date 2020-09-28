const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/bublinec/Code/JB-Blog/.cache/dev-404-page.js"))),
  "component---src-pages-about-tsx": hot(preferDefault(require("/home/bublinec/Code/JB-Blog/src/pages/about.tsx"))),
  "component---src-pages-blog-tsx": hot(preferDefault(require("/home/bublinec/Code/JB-Blog/src/pages/blog.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("/home/bublinec/Code/JB-Blog/src/pages/contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/home/bublinec/Code/JB-Blog/src/pages/index.tsx"))),
  "component---src-templates-blog-tsx": hot(preferDefault(require("/home/bublinec/Code/JB-Blog/src/templates/blog.tsx")))
}

