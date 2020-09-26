import React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout';


const AboutPage = () => {
  return ( 
    <Layout>
      <div>
        <h1>About</h1>
        <h2>This is page about me</h2>
        <Link to='/contact'>Contact</Link>
      </div>
    </Layout>
   );
}
 
export default AboutPage;
