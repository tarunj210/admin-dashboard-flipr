import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import IconsData from '../constants';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%',
        height: '100%',
        fontSize: '75px'
    },
    title: {
        fontWeight: '700',
        fontSize: '25px'
    },
    grid: {

        padding: '18px',
        width: '100%',
        height: '100%',
        fontSize: '75px',
        marginTop: '25px'

    }
}));

function Icons() {
    const classes = useStyles();
    const getIcon = (icon) => {

        return (

            <div>
                <Grid item xs={2} sm={2}>
                </Grid>

                <Grid item xs={12} sm={4} className={classes.grid}>
                    {icon.icon}

                </Grid>



            </div>
        )
    }
    return (
        <>
            <div className={classes.root}>
                <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>ICONS</h1>
                <Grid container spacing={1}>


                    {IconsData.map(icon => getIcon(icon))}
                </Grid>
            </div>
        </>
    )
}

export default Icons;
