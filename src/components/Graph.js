import React from 'react'
import {Line} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles= makeStyles({
    chartContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:'2rem',
        boxSizing:'border-box',
      },
      
})


const Graph = ({data}) => {
    const options={
        title:{
            display:true,
            text: 'Daily Order Trend'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                      min:0,
                      max:50000,
                    stepSize: 5000,
                    }
                }
            ]
        }
    }
    const classes = useStyles();
    return (
        <Grid container className={classes.chartContainer} >
            <Grid item xl={8} lg={8} md={10} sm={10}  xs={10}>
            <Line data={data} options={options}  />
            </Grid>
        </Grid>
    )
}

export default Graph

