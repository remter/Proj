import React, {Component} from 'react';

async function GetCommand(URL_parm){

    console.log(URL_parm)
    var url = "http://192.168.1.210:8080/"+URL_parm;
    console.log(url);
   const response = await fetch(url, {
        method:"GET",
          mode:'cors',
          headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers" : '*' ,
            'Access-Control-Allow-Origin' : '*'
          }
    })
    console.log(response);
    const body = await response.json();
    console.log(body);
    return body;

};


// state = {
//     isLoading: true,
//     user: []
//   };

//   async componentDidMount() {
//     const url = "http://192.168.1.210:8080/user"
//     const response = await fetch(url, {
//       method:"GET",
//       mode:'cors',
//       headers:{
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Headers" : '*' ,
//         'Access-Control-Allow-Origin' : '*'
//       }
//     });
//     console.log(response);
    
//     const body = await response.json();
//     console.log(body)
//     this.setState({ user: body, isLoading: false });
//   }



export default GetCommand;