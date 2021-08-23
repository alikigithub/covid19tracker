
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "1000px",
    },
    paper: {
        padding: "20px",
        textAlign: "center",
        color: theme.palette.text.secondary,
        borderBottom:"10px solid rgba(0,0,255,0.5)",
    },
}));
export default function Global({ apivalue }) {

    const classes = useStyles();
    if (!apivalue.confirmed) {
        return "Loading.....";
    }
    return (
        <div className={classes.root}>

            <Grid container spacing={6}>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <h1>  Confirmed </h1>
                        
                            <CountUp
                                start={0}
                                end={apivalue.confirmed.value}
                                duration={2}
                                separator=","
                            />        
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <h1>Recovered</h1>
                    
                            <CountUp
                                start={0}
                                end={apivalue.recovered.value}
                                duration={2}
                                separator=","
                            />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <h1>Deaths</h1>
                        
                            <CountUp
                                start={0}
                                end={apivalue.deaths.value}
                                duration={2}
                                separator=","
                            />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
