"use strict";
const express = require("express");
const app = require("express")();
const http = require("http").createServer(app);
const conn = require("./db");

const PORT = process.env.PORT || 4000;
const cors = require("cors");
app.use(cors());
const path = require("path");


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



 
 
 //2-------------------------
 app.get('/wholesale',async(req,res)=>{
    let message = null;
    let statusCode = 400;
    let data;
    try {
      let sql = `SELECT id FROM  retailer`;
      const agent = await conn.query(sql);
      if (agent.length > 0) {
        statusCode = 200;
        message = "success";
        var retailerArray=[]
        for(var i=0;i<agent.length;i++){
           sql = `SELECT COUNT(wholesaler_id) AS COUNT FROM stock WHERE retailer_id=? `;
          const retailer = await conn.query(sql, agent[i].id);
         console.log("retailer information",retailer[0].COUNT)
         if(retailer[0].COUNT==1){
          sql = `SELECT name,mobile_number FROM retailer where id=?  `;
          const retailerData = await conn.query(sql, agent[i].id);
          retailerArray.push(retailerData[0])
        
         }
 }
 data=retailerArray
        
        
        
      } else {
        statusCode = 404;
        message = "Agent not found";
      }
      const responseData = {
        status: statusCode,
        message,
        data,
      };
      res.send(responseData);
    } catch (error) {
      console.log("error------",error)
      res.status(500).send("Database error");
    }
 })
 
//3--------------------------------
 app.get('/totalTurnOver',async(req,res)=>{
  let message = null;
  let statusCode = 400;
  let data;
  try {
    let sql = `SELECT id,name FROM wholesalers `;
    const agent = await conn.query(sql);
    if (agent.length > 0) {
      statusCode = 200;
      message = "success";
      var retailerArray=[]
      for(var i=0;i<agent.length;i++){
         sql = `SELECT SUM(amount) AS total_Turn_over FROM stock WHERE wholesaler_id=? `;
        const retailer = await conn.query(sql, agent[i].id);
       console.log("retailer information",retailer[0].total_Turn_over)
       retailerArray.push({name:agent[i].name,total_Turn_over:retailer[0].total_Turn_over})
       
}
data=retailerArray
      
} else {
      statusCode = 404;
      message = "Agent not found";
    }
    const responseData = {
      status: statusCode,
      message,
      data,
    };
    res.send(responseData);
  } catch (error) {
    console.log("error------",error)
    res.status(500).send("Database error");
  }
})

 app.get('/MaxtotalTurnOver',async(req,res)=>{
  let message = null;
  let statusCode = 400;
  let data;
  try {
    let sql = `SELECT id,name FROM wholesalers `;
    const agent = await conn.query(sql);
    if (agent.length > 0) {
      statusCode = 200;
      message = "success";
      var retailerArray=[]
      var retailerArray2=[]

      for(var i=0;i<agent.length;i++){
        sql = `SELECT SUM(amount) AS total_Turn_over FROM stock WHERE wholesaler_id=? `;
        const retailer = await conn.query(sql, agent[i].id);
       if(retailer[0].total_Turn_over==null){
        retailerArray.push({name:agent[i].name,total_Turn_over:0})

       retailerArray2.push(0) 
       console.log("retailer information",retailer[0].total_Turn_over)

       }else{
        retailerArray.push({name:agent[i].name,total_Turn_over:retailer[0].total_Turn_over})

        retailerArray2.push(retailer[0].total_Turn_over)  
       console.log("retailer information",retailer[0].total_Turn_over)
        
       }
        
}
var index=retailerArray2.indexOf(Math.max(...retailerArray2))
data=retailerArray[index]
      
} else {
      statusCode = 404;
      message = "Agent not found";
    }
    const responseData = {
      status: statusCode,
      message,
      data,
    };
    res.send(responseData);
  } catch (error) {
    console.log("error------",error)
    res.status(500).send("Database error");
  }

 })
 
 
 



//1------------------
 app.post('/wholeRe', async (req, res) => {
    let message = null;
    let statusCode = 400;
    var data = {};
    const { wholesaleid } = req.body;
    try {
      let sql = `SELECT retailer_id FROM stock where wholesaler_id=? `;
      const agent = await conn.query(sql, wholesaleid);
      if (agent.length > 0) {
        statusCode = 200;
        message = "success";
  
        console.log("retailer_id",agent)
        var retailerArray=[]
        for(var i=0;i<agent.length;i++){
           sql = `SELECT name,mobile_number FROM retailer where id=? `;
          const retailer = await conn.query(sql, agent[i].retailer_id);
         console.log("retailer information",retailer)
         retailerArray.push(retailer[0])
 }
 data=retailerArray
      } else {
        statusCode = 404;
        message = "detail not found";
      }
      const responseData = {
        status: statusCode,
        message,
        data,
      };
      res.send(responseData);
    } catch (error) {
      res.status(500).send("Database error");
      console.log("error",error)
    }
  });
  






app.get("/test", (req, res) => {
  res.send("hello world");
});





http.listen(PORT, () => {
  ("listening on " + PORT);
});
