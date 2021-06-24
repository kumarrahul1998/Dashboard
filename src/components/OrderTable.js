import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    tableContainer:{
      width:'90vw',
      display:'flex',
      justifyContent:"center",
      alignContent:"center",
    },
    mainContainer:{
      display:'flex',
      justifyContent:"center",
      alignContent:"center",
      margin: '2rem 0'
    },
    heading:{
      color:'#164f55',
    },
    headingContainer:{
      width:'90vw',
      display:'flex',
      justifyContent:"center",
    }
  });

  
const OrderTable = (props) => {
    
 const classes = useStyles();
    const {data,heading} = props;
  return (
    <>
    <div className={classes.headingContainer}>
      <Typography variant="h6" className={classes.heading}>{heading}</Typography>
    </div>
<div className={classes.mainContainer}>
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order No</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right">Total Quantity</TableCell>
            <TableCell align="right">User Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.orderNo}
              </TableCell>
              <TableCell align="right">{row.totalAmount}</TableCell>
              <TableCell align="right">{row.totalQuantity}</TableCell>
              <TableCell align="right">{row.userName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
</>
    )
}

export default OrderTable
