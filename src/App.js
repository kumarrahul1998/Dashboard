import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Tiles from './components/Tiles';
import {data1,data2} from './components/data';
import OrderTable from './components/OrderTable'
import Graph from './components/Graph';
import UserTable from './components/UserTable';
import DetailOrderReport from './components/DetailOrder';
function App() {
  const [region,setRegion] = useState();
    
    const handleRegionChange = (event) => {
        setRegion(event.target.value);
      };
  return (
    <>
      <Navbar region={region} handleRegionChange={handleRegionChange} ></Navbar>
      <Tiles data={region==='delhi'?data1.tileData:data2.tileData}></Tiles>
      <Graph data={region==='delhi'?data1.graphData:data2.graphData}></Graph>
      <OrderTable heading={'Top 5 order'} data={region==='delhi'?data1.orderTableData1:data2.orderTableData1}></OrderTable>
      <OrderTable heading={'Bottom 5 order'} data={region==='delhi'?data1.orderTableData2:data2.orderTableData2}></OrderTable>
      <UserTable heading={'Top 5 User'} data={region==='delhi'?data1.userTableData1:data2.userTableData1}></UserTable>
      <UserTable heading={'Bottom 5 User'} data={region==='delhi'?data1.userTableData2:data2.userTableData2}></UserTable>
      <DetailOrderReport heading={'Detail Order Report'} data={region==='delhi'?data1.detailOrderData:data2.detailOrderData}></DetailOrderReport>
    </>
  );
}

export default App;
