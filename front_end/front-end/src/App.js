
import React, {Component} from 'react';
import Table from './components/Table.js';
import Tab from './components/Tab.js';
import httpCalls from './Requests/httpCalls';
import "./App.css"
import TabNav from './components/TabNav.js';
import Input_Form from './components/getForm.js';


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

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selected: "Home",
      tableStatus: "Users",
      requestStatus: "Get",
      user: [],
      item: []
    };
    //Binding the functions to prevent issues.
    this.update_data_users = this.update_data_users.bind(this);
    this.update_data_items = this.update_data_items.bind(this);
  }

  //Tab selection
  setSelected = (tab) =>{
    this.setState({selected:tab})
  }
  setSelectedTable = (tab) =>{
    this.setState({tableStatus:tab})
  }
  setSelectedFunction = (tab) =>{
    this.setState({requestStatus:tab})
  }

  //Updates
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
      this.setState({ isLoading: false });
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
      this.setState({ isLoading: false });
    
    }
  
  //Runs when reloaded
  async componentDidMount() {
    await this.update_data_users();
    await this.update_data_items();
  }
  
  render(){
    const {user, item, isLoading} = this.state;

    //If stuck or waiting
    if (isLoading){
      return  <div className="App"> 
            <h1> Loading </h1>
         <div>Loading... </div> 
        </div>
    }
    else {
      return (

        <div className="App">
          <TabNav tabs={['Home', 'Table', 'Functions']} selected={this.state.selected} setSelected ={this.setSelected}>
            {/* Home Page */}
            <Tab isSelected={this.state.selected === "Home"}>
              <p>Some test</p>
            </Tab>
            
            {/* Tables Page */}
            <Tab isSelected={this.state.selected === "Table"}>
              <TabNav tabs={['Users', 'Items']} selected = {this.state.tableStatus} setSelected = {this.setSelectedTable}>
              {/* Users table */}
              <Tab isSelected={this.state.tableStatus === "Users"}>
                <button onClick={this.update_data_users}>
                  Reload
                </button> 
                <Table columns={columns_user} data={user} />
                
              </Tab>
              
              {/* Inventory table */}
              <Tab isSelected={this.state.tableStatus === "Items"}>
                <button onClick={this.update_data_items}>
                  Reload
                </button> 
                <Table columns={columns_inv} data={item} />
              </Tab>
              </TabNav>
            </Tab>
            
            {/* Function page */}
            <Tab isSelected={this.state.selected === "Functions"}>
              <TabNav tabs={['Get', 'Post']} selected = {this.state.requestStatus} setSelected = {this.setSelectedFunction}>
                <Tab isSelected={this.state.requestStatus === "Get"}>
                  {/* create a form for get request */}
                  <div>Search for Users</div>
                  <Input_Form>
                  </Input_Form>
                </Tab>
                <Tab isSelected={this.state.requestStatus === "Post"}>
                  <div> Post</div>
                </Tab>
              </TabNav>
            </Tab>

          </TabNav>
          <header className="App-header">
          
          </header>
        </div>
      );
    }
  }


}

  


export default App;
