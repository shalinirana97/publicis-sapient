import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <Grid container direction="row" className="main-wrap" >
            <Header />
            {props.children}
            <Footer />
        </Grid>
    )
}