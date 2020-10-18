import React, { useState, useEffect } from 'react';
import {
    Grid,
    Paper,
    Typography,
    Button,
    Divider,
} from '@material-ui/core';
import moment from 'moment';

export default function CustomFilters(props) {
    const [years, setYears] = useState([])

    useEffect(() => {
        let years = []
        const dateStart = moment().subtract(14, 'y')
        const dateEnd = moment(2020, 'year')
        while (dateEnd.diff(dateStart, 'years') >= 0) {
            years.push(dateStart.format('YYYY'))
            dateStart.add(1, 'year')
        }
        setYears(years)
    }, []);

    const {
        changeFilter,
        activeYear,
        activeLaunch,
        activeLand
    } = props
    
    return (
        <Grid item xs={12} sm={4} lg={3} className="p-2">
            <Paper className='cust-filters'>
                <Typography variant="h6" component="h6"><b>Filters</b></Typography>
                <Grid item>
                    <Typography variant="subtitle1" align="center">Launch Year</Typography>
                    <Divider variant="middle" />
                    <Grid item xs={12} >
                        <Grid container direction="row"
                            justify="space-between"
                            alignItems="center"
                            className="p-2">
                            {
                                years.map((year, key) => {
                                    return <Grid item xs={6} key={key} className='years-items'>
                                        <div className='years-div'>
                                            <Button variant="contained" fullWidth className={activeYear == year ? 'activeBtnBg' : ''} size="medium" onClick={() => changeFilter('launch_year', year, 'activeYear')}>{year}</Button>
                                        </div>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className='p-2'>
                    <Typography variant="subtitle1" align="center">Successful Launch</Typography>
                    <Divider variant="middle" />
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        className='pt-2'
                    >
                        <Grid item xs={6} className='years-items'>
                            <div className='years-div'>
                                <Button variant="contained" size="medium" className={activeLaunch ? 'activeBtnBg' : ''}
                                    onClick={() => changeFilter('launch_success', true, 'activeLaunch')} >
                                    True
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6} className='years-items'>
                            <div className='years-div'>
                                <Button variant="contained" size="medium" className={activeLaunch !== "" && !activeLaunch ? 'activeBtnBg' : ''}
                                    onClick={() => changeFilter('launch_success', false, 'activeLaunch')} >
                                    False
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className='p-2'>
                    <Typography variant="subtitle1" align="center">Successful Landing</Typography>
                    <Divider variant="middle" />
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        className='pt-2'
                    >
                        <Grid item xs={6} className='years-items'>
                            <div className='years-div'>
                                <Button variant="contained" size="medium" className={activeLand ? 'activeBtnBg' : ''}
                                    onClick={() => changeFilter('land_success', true, 'activeLand')}>
                                    True
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={6} className='years-items'>
                            <div className='years-div'>
                                <Button variant="contained" size="medium" className={activeLand !== "" && !activeLand ? 'activeBtnBg' : ''}
                                    onClick={() => changeFilter('land_success', false, 'activeLand')}>
                                    False
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

    );
}
