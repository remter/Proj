
import React, {Component} from 'react';
import Table from './Table.js';
import httpCalls from './Requests/httpCalls';

import './App.css';
var url_parm = "";
const columns_user = [
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
const columns_inv = [
  {
    Header: 'Basic table of inventory',
    columns:[
      {
        Header: 'ID',
        accessor: 'id',
      },
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
      }

    ]
  }
]


class App extends Component {
  /*const updateData = async() => {
  this.setState({ isLoading: true });
  let data = [];
  try {
    data = GetCommand(url_param);
    this.setState({ user: data });
  } catch (e) {
    // TODO: some error handling here
  } finally {
    this.setState({ isLoading: false });
  }
*/
constructor(props) {
  super(props);
  this.state = {
    isLoading: true,
    user: [],
    item: []
  };
}

    async  update_data_users() {
      this.setState({ isLoading: true });
      let data = [];
      url_parm = "user";
      
      try{
        //create a class with http calls
        let cal = new httpCalls("http://localhost:8080/");
        data = await cal.a_get(url_parm);
        this.setState( {user: data });
      }
      catch (e){
        console.log(e);
      }
    
    }
    async  update_data_items() {
      this.setState({ isLoading: true });
      let data = [];
      url_parm = "item";
      
      try{
        //create a class with http calls
        let cal = new httpCalls("http://localhost:8080/");
        data = await cal.a_get(url_parm);
        this.setState( {item: data });
      }
      catch (e){
        console.log(e);
      }
    
    }
  
  


  async componentDidMount() {
    await this.update_data_users();
    await this.update_data_items();
    this.setState({ isLoading: false });
  }
  


  render(){
    const {user, item, isLoading} = this.state;

   
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
    // console.log(isLoading)
    // console.log(user);
    if (isLoading){
      return  <div className="App"> Loading... </div>
    }
    else {
      return (


        <div className="App">
          
          <header className="App-header">
          <Table columns={columns_user} data={user} />
          <div> </div>
          <Table columns={columns_inv} data={item} />

          </header>
        </div>
      );
    }
  }


}

  


export default App;
