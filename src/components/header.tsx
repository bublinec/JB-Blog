import React, { Fragment } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { AppBar, Toolbar, Typography, Grid, Container } from '@material-ui/core';
import styled from 'styled-components';

const AppBarWrapper = styled.div`
    h2{
        display: inline;
        color: #f1faee;
    }  
`;

const AppBarLinksWrapper = styled.div`
    display: inline;
    margin-top: 5px;
    float: right;
    ul {
        display: inline;
    }
    li {
        display: inline;
        margin: 0.5rem;
        font-size: 1.2rem;
        a {
            color: #f1faee;
            text-decoration: none;
        }
    }

`;


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
        <Fragment>
            <AppBar position='absolute'>
                <Toolbar>
                    <Container maxWidth="xl">
                        <Typography>
                            <AppBarWrapper>
                                <h2>{data.site.siteMetadata.title}</h2>
                                <AppBarLinksWrapper>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to='/about'>About</Link></li>
                                        <li><Link to='/blog'>Blog</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                    </ul>
                                </AppBarLinksWrapper>

                            </AppBarWrapper>
                        </Typography>
                        
                    </Container>
                </Toolbar>
            </AppBar>
            {/* to avoid AppBar covering the content */}
            <Toolbar /> 
        </Fragment>










        // <header>
        //     <h2>{data.site.siteMetadata.author}</h2>
        //     <nav>
        
        //         <hr/>
        //     </nav>
        // </header>
     );
}
 
export default Header;