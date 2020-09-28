import React, { useRef, Fragment } from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';


const IndexPage = () => {
  return ( 
    <Layout>
      <Fragment>
        <h1>Home</h1>
        <h2>This is my first Gatsby web app!</h2>
        <Link to='/contact'>Contact</Link>
      </Fragment>
    </Layout>
   );
}
 
export default IndexPage;
