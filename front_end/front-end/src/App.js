import logo from './logo.svg';
import React, {Component} from 'react';
import {useTable} from 'react-table'


import './App.css';

//Code gotten from react tables lib
function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
var data = [];
// function getData() {
//   const url = "http://localhost:8080/user";
//   var response =  fetch(url, {
//     method :"GET",
//     mode:'no-cors',
//     headers:{
//       "Content-Type": "text/plain"
//     }
//   })
//   return response;

  

class App extends Component {
  state = {
    isLoading: true,
    user: []
  };

  async componentDidMount() {
    const url = "http://localhost:8080/user"
    const response = await fetch(url, {
      method:"GET",
      mode:'cors',
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers" : '*' ,
        'Access-Control-Allow-Origin' : '*'
      }
    });
    console.log(response);
    
    const body = await response.json();
    console.log(body)
    this.setState({ user: body, isLoading: false });
  }
   
  
  

  render(){
    const {user, isLoading} = this.state;
    // var data = []
    // var data2 = getData();
    console.log(user);
    console.log("state: ", this.state );

    const columns = [
        {
          Header: 'Basic table of users',
          columns:[
            {
              Header: 'ID',
              accessor: 'id',
            },
            {
              Header: 'Name',
              accessor: 'name',
            },
            {
              Header: 'Username',
              accessor: 'userName',
            },
            {
              Header: 'Current Role',
              accessor: 'role',
            }
  
          ]
        }
      ]
    
  
    // data = [{
    //   "name": "Bob barker",
    //   "userName": "bbar001",
    //   "id": 1,
    //   "role": "owner"
    // },
    // {
    //   "name": "Bob barker",
    //   "userName": "bbar001",
    //   "id": 1,
    //   "role": "owner"
    // }
    // ]

  return (


    <div className="App">
      
      <header className="App-header">
      <Table columns={columns} data={user} />

      </header>
    </div>
  );
  }
}


export default App;
