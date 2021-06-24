import React from 'react'
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles= makeStyles({
    navbar:{
        display:"flex",
        justifyContent:"space-between",
    },
})
const Navbar = (props) => {
    
    const {region,handleRegionChange} = props
    const classes = useStyles();
    return (
            <Grid container>
                <Grid item xs={10}>
                        <AppBar position="fixed">
                    <Toolbar className={classes.navbar}>
                    <Typography variant="h6" className={classes.title}>
                    Dashboard
                    </Typography>
                    <Select
                    value={region}
                    onChange={handleRegionChange}
                    >
                <MenuItem value='delhi'>Delhi</MenuItem>
                <MenuItem value='up'>Up</MenuItem>
                    </Select>
                    </Toolbar>
                    </AppBar>
                
                </Grid>
            </Grid>
            
    )
}

export default Navbar
