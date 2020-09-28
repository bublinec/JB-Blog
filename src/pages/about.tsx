import React, { Fragment } from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';


const AboutPage = () => {
  return ( 
    <Layout>
      <Fragment>
        <h1>About</h1>
        <h2>This is page about me</h2>
        <Link to='/contact'>Contact</Link>
      </Fragment>
    </Layout>
   );
}
 
export default AboutPage;
