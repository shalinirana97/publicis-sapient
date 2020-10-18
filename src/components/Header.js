import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        fontWeight:"bold"
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
                <Toolbar>
                    <h2 className={classes.title}>
                        SpaceX Launch Programs
                    </h2>
                </Toolbar>
        </Grid>
    );
}
