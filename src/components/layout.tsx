import React from 'react'
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';
import { Grid, Container } from '@material-ui/core';

const LayoutWrapper = styled.div`
  background-color: #f1faee;
  min-height: 1500px;
  margin: -8px;
`;

export interface LayoutProps {
    children: React.ReactNode
}
 
const Layout: React.SFC<LayoutProps> = (props: LayoutProps) => {
    return ( 
        <LayoutWrapper>
            <Grid container direction='column'>
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
            </Grid>
        </LayoutWrapper>

     );
}
 
export default Layout;