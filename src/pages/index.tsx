import React, { useRef } from "react"
import { Link } from 'gatsby';

import Layout from '../components/layout';


const IndexPage = () => {
  return ( 
    <Layout>
      <div>
        <h1>Home</h1>
        <h2>This is my first Gatsby web app!</h2>
        <Link to='/contact'>Contact</Link>
      </div>
    </Layout>
   );
}
 
export default IndexPage;
