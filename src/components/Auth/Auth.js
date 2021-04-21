import React from 'react';
import { Container, Grid } from '@material-ui/core';
import EmailOrPhone from './EmailOrPhone/EmailOrPhone';

const Auth = () => {
    return (
        <Container style={{paddingTop: '50px', minHeight: '800px'}}>
            <Grid container justify="center">
                <Grid item xs={12} sm={12} md={12}>
                    <EmailOrPhone />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Auth;