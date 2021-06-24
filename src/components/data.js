export const data1={
    tileData:{
        todayOrder:200,
        weekOrder: 450,
        orderAmount: 20000,
        weekAmount:45000,
        mtdOrder:400,
        monthOrder:200,
        mtdAmount:65000,
        monthAmount:45000,
    },
    graphData:{
        labels:['0','7/1/2020','7/2/2020','7/3/2020','7/4/2020'],
        datasets: [
            {
                label: 'Order Amount',
                data: [0,2000,30000,22500,45000],
                borderColor: ['rgb(252,146,227)'],
                backgroundColor: ['rgb(252,146,227)'],
                pointBackgroundColor: 'rgb(252,146,227)',
                pointBorderColor: 'rgb(252,146,227)',
            
            }
        ],
        
    },
    orderTableData1:[
        {orderNo:101 ,totalAmount:10000,totalQuantity:2,userName:"Rahul",},
        {orderNo:102 ,totalAmount:20000,totalQuantity:2,userName:"Tanu",},
        {orderNo:103 ,totalAmount:30000,totalQuantity:2,userName:"Nisha",},
        {orderNo:104 ,totalAmount:40000,totalQuantity:2,userName:"Kapil",},
        {orderNo:105 ,totalAmount:50000,totalQuantity:2,userName:"Ayush",},
    ],
    orderTableData2:[
        {orderNo:1080 ,totalAmount:10000,totalQuantity:5,userName:"Rahul",},
        {orderNo:1081 ,totalAmount:20000,totalQuantity:5,userName:"Sanjay",},
        {orderNo:1082 ,totalAmount:30000,totalQuantity:5,userName:"Babli",},
        {orderNo:1083 ,totalAmount:40000,totalQuantity:5,userName:"Babita",},
        {orderNo:1084 ,totalAmount:50000,totalQuantity:5,userName:"Rajesh",},
    ],
    userTableData1:[
        {userName:"Rahul",totalAmount:10000,totalQuantity:2,city:"delhi"},
        {userName:"Tanu",totalAmount:20000,totalQuantity:2,city:"delhi"},
        {userName:"Nisha",totalAmount:30000,totalQuantity:2,city:"delhi"},
        {userName:"Kapil",totalAmount:40000,totalQuantity:2,city:"delhi"},
        {userName:"Ayush",totalAmount:50000,totalQuantity:2,city:"delhi"},
    ],
    userTableData2:[
        {userName:"Rahul",totalAmount:10000,totalQuantity:5,city:"delhi"},
        {userName:"Sanjay",totalAmount:20000,totalQuantity:5,city:"delhi"},
        {userName:"Babli",totalAmount:30000,totalQuantity:5,city:"delhi"},
        {userName:"Babita",totalAmount:40000,totalQuantity:5,city:"delhi"},
        {userName:"Rajesh",totalAmount:50000,totalQuantity:5,city:"delhi"},
    ],
    
    detailOrderData:[
        {userName:'Kapil',orderNo:201,orderDate:'23/6/2021',status:'paid',totalAmount:5000,totalQuantity:5,totalProductCount:8,},
        {userName:'Nisha',orderNo:202,orderDate:'22/6/2021',status:'unpaid',totalAmount:6000,totalQuantity:10,totalProductCount:7,},
        {userName:'Tanu',orderNo:203,orderDate:'21/6/2021',status:"unpaid",totalAmount:8000,totalQuantity:9,totalProductCount:6,},
        {userName:'Rahul',orderNo:204,orderDate:'20/6/2021',status:'paid',totalAmount:9000,totalQuantity:50,totalProductCount:5,},
    
    ]
    
}

export const data2={
    tileData:{
    todayOrder:400,
    weekOrder:900,
    orderAmount:10000,
    weekAmount: 90000,
    mtdOrder: 800,
    monthOrder: 100,
    mtdAmount: 90000,
    monthAmount:90000,
    },
    graphData:{
        labels:['0','7/1/2020','7/2/2020','7/3/2020','7/4/2020'],
        datasets: [
            {
                label: 'Order Amount',
                data: [0,5000,1000,30000,48000],
                borderColor: ['rgb(22,79,85)'],
                backgroundColor: ['rgb(22,79,85)'],
                pointBackgroundColor: 'rgb(22,79,85)',
                pointBorderColor: 'rgb(22,79,85)',
            }
        ],
        
    },
    orderTableData1:[
        {orderNo:101 ,totalAmount:10000,totalQuantity:3,userName:"Dishant",},
        {orderNo:102 ,totalAmount:20000,totalQuantity:3,userName:"Sourabh",},
        {orderNo:103 ,totalAmount:30000,totalQuantity:3,userName:"Rajesh",},
        {orderNo:104 ,totalAmount:40000,totalQuantity:3,userName:"Kapil",},
        {orderNo:105 ,totalAmount:50000,totalQuantity:3,userName:"Ayush",},
    ],
    orderTableData2:[
        {orderNo:1080 ,totalAmount:10000,totalQuantity:5,userName:"shruti",},
        {orderNo:1081 ,totalAmount:20000,totalQuantity:5,userName:"Tanvi",},
        {orderNo:1082 ,totalAmount:30000,totalQuantity:5,userName:"omvati",},
        {orderNo:1083 ,totalAmount:40000,totalQuantity:5,userName:"Babita",},
        {orderNo:1084 ,totalAmount:50000,totalQuantity:5,userName:"Rajesh",},
    ],
    userTableData1:[
        {userName:"shruti",totalAmount:10000,totalQuantity:5,city:"Haryana"},
        {userName:"Tanvi",totalAmount:20000,totalQuantity:5,city:"Haryana"},
        {userName:"omvati",totalAmount:30000,totalQuantity:5,city:"Haryana"},
        {userName:"Babita",totalAmount:40000,totalQuantity:5,city:"Haryana"},
        {userName:"Rajesh",totalAmount:50000,totalQuantity:5,city:"Haryana"},
    ],
    userTableData2:[
        {userName:"Dishant",totalAmount:10000,totalQuantity:3,city:"Haryana"},
        {userName:"Sourabh",totalAmount:20000,totalQuantity:3,city:"Haryana"},
        {userName:"Rajesh",totalAmount:30000,totalQuantity:3,city:"Haryana"},
        {userName:"Kapil",totalAmount:40000,totalQuantity:3,city:"Haryana"},
        {userName:"Ayush",totalAmount:50000,totalQuantity:3,city:"Haryana"},
    ],
    detailOrderData:[
        {userName:'Rahul',orderNo:304,orderDate:'20/6/2021',status:'paid',totalAmount:9000,totalQuantity:50,totalProductCount:5,},
        {userName:'Nisha',orderNo:302,orderDate:'22/6/2021',status:'unpaid',totalAmount:6000,totalQuantity:10,totalProductCount:7,},
        {userName:'Tanu',orderNo:303,orderDate:'21/6/2021',status:"unpaid",totalAmount:8000,totalQuantity:9,totalProductCount:6,},
        {userName:'Kapil',orderNo:301,orderDate:'23/6/2021',status:'unpaid',totalAmount:5000,totalQuantity:5,totalProductCount:8,},
    ]
   
}