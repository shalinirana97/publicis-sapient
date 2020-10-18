import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold",
        textAlign: "center"
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container direction="row"
            justify="space-around"
            alignItems="center"
            className={classes.root}>
            <div className='d-flex footer-title'>
                <h4 className={classes.title}>
                    Developed by:
                </h4>
                <h4 className={classes.title}>Shalini Rana</h4>
            </div>
        </Grid>
    );
}
