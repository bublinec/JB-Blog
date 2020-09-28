import React from 'react';
import { Grid, Container, Box } from '@material-ui/core';

const Footer = () => {
    return (
        <Box mt={10}>
            <Container >
                <hr />
                <Grid container justify="center">
                    <p>Created by Juraj Bublinec, 2020</p>
                </Grid>
            </Container>
        </Box>

     );
}
 
export default Footer;
