import React, { Component } from "react";
import Table from "./Table";
import httpCalls from "../Requests/httpCalls";
import { useState } from "react";
class InvTable extends Component{
  
  render(){
    const columns_inv = [
      {
        Header: 'Basic table of inventory',
        columns:[
          {
            Header: 'Serial Number',
            accessor: 'serialNum',
          },
          {
            Header: 'Type of device',
            accessor: 'type',
          },
          {
            Header: 'Owner Id',
            accessor: 'ownerId',
          },
          {
            Header: 'Model',
            accessor: 'model',
          },
          {
            Header: 'Maker',
            accessor: 'maker',
          },
          {
            Header: 'Description',
            accessor: 'description',
          },
          {
            Header: 'Checkout Status',
            accessor: 'sChec'
          },
          {
            Header: 'Check Out/ Check In',
            accessor: 'bChec'
          }
        ]
      }
  ]
  function Click(serialNum, oId){
    console.log("Button Pressed");
    let cal = new httpCalls("http://localhost:8080/");
    cal.u_own("item/status", serialNum, oId);
    console.log(InvTable.state)
    window.location.reload(false);
  }
  
  function checStatus (arr){
    if (arr.ownerId === 0){
      return ("Not Checked out");
    }
    else{
      return "Checked out";
    }
  }
    
   
    //(arr.serialNum, 0)
  function crButt (arr){
    if (arr.ownerId === 0){
      return (<button type="button" onClick={() => Click(arr.serialNum, 1)}>
          Check Out
      </button>);
    }
    else{
      return(<button type="button" onClick={() =>Click(arr.serialNum, 0)}>
          Check In
      </button>);
    }
  }
    const inve = this.props.inv;

     inve.map(i=>i.sChec=checStatus(i));
     inve.map(i=>i.bChec=crButt(i));
     console.log(columns_inv)
    return (
        <div>
             <Table columns={columns_inv} data={inve}/>
         </div>
    );


  }
}
export default InvTable;