import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles= makeStyles({
    container:{
        marginTop:'10vh'
    },
    card:{
        padding:'1rem',
        backgroundColor:'#b9d5fd',
        }
})

const Tiles = (props) => {
    
    const {data} = props
    const classes = useStyles();
    return (<>
            <Grid container className={classes.container}>
            <Grid item xl={3} lg={3} md={4} sm={6}  xs={12} >
            <Card variant="outlined" className={classes.card}>
                    <div>
                        <Typography variant="subtitle2">Today's order-{data.todayOrder}</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle2">Current Week Order-{data.weekOrder}</Typography>
                    </div>
            </Card>
        
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6}  xs={12} >
            <Card variant="outlined" className={classes.card}>
                    <div>
                        <Typography variant="subtitle2">Today's order amount-{data.orderAmount}</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle2">Current Week amount-{data.weekAmount}</Typography>
                    </div>
            </Card>
        
            </Grid>
            <Grid data xl={3} lg={3} md={4} sm={6}  xs={12} >
            <Card variant="outlined" className={classes.card}>
                    <div>
                        <Typography variant="subtitle2">MTD order-{data.mtdOrder}</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle2">Last Month Order-{data.monthOrder}</Typography>
                    </div>
            </Card>
        
            </Grid>
            <Grid data xl={3} lg={3} md={4} sm={6}  xs={12} >
            <Card variant="outlined" className={classes.card}>
                    <div>
                        <Typography variant="subtitle2">MTD order amount-{data.mtdAmount}</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle2">Last month amount-{data.monthAmount}</Typography>
                    </div>
            </Card>
        
            </Grid>
            </Grid>
        
        </>);
}

export default Tiles;