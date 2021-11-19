import logo from './logo.svg';
import React, {Component} from 'react';
import Table from './Table.js';

import GetCommand from './Requests/GetCommand';

import './App.css';
var url_parm = "user";
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
    user: []
  };
}

    async  update_data() {
      this.setState({ isLoading: true });
      let data = []
      try{
        data = await GetCommand(url_parm);
        this.setState( {user: data });
      }
      catch (e){
        console.log(e);
      }
    
    }
  


  async componentDidMount() {
    await this.update_data();
    this.setState({ isLoading: false });
  }
  


  render(){
    const {user, isLoading} = this.state;

   
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
          <Table columns={columns} data={user} />

          </header>
        </div>
      );
    }
  }


}

  


export default App;
