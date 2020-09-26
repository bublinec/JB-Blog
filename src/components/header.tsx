import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        site {
        siteMetadata {
            title
            author
        }
        }
    }
    `)

    return (
        <AppBar position='fixed' style={{ margin: 0 }}>
            <Toolbar>
                <Typography>
                    This is our header
                </Typography>
            </Toolbar>


        </AppBar>









        // <header>
        //     <h1>{data.site.siteMetadata.title}</h1>
        //     <h2>{data.site.siteMetadata.author}</h2>
        //     <nav>
        //         <ul>
        //             <li><Link to="/">Home</Link></li>
        //             <li><Link to='/about'>About</Link></li>
        //             <li><Link to='/blog'>Blog</Link></li>
        //             <li><Link to='/contact'>Contact</Link></li>
        //         </ul>
        //         <hr/>
        //     </nav>
        // </header>
     );
}
 
export default Header;