import React from 'react'
import Footer from './footer';
import Header from './header';
import { Grid, Container } from '@material-ui/core';

export interface LayoutProps {
    
}
 
const Layout: React.SFC<LayoutProps> = (props) => {
    return ( 
        <Grid container direction='column' justify="flex-end">
            <Grid item>
                <Header />     
            </Grid>
            <Grid item>
                <Container>
                    {props.children}
                </Container>
            </Grid>
            <Grid item>
                <Footer /> 
            </Grid>
            
                {/* {props.children} */}

            {/* <Footer /> */}
        </Grid>
     );
}
 
export default Layout;