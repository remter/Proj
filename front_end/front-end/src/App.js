
import React, {Component} from 'react';
import Table from './components/Table.js';
import Tab from './components/Tab.js';
import httpCalls from './Requests/httpCalls';
import "./App.css"
import TabNav from './components/TabNav.js';


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
      selected: "Home",
      user: [],
      item: []
    };
  }
  setSelected = (tab) =>{
    this.setState({selected:tab})
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
            <Tab isSelected={this.state.selected === "Home"}>
              <p>Some test</p>
            </Tab>
            <Tab isSelected={this.state.selected === "Table"}>
              <Table columns={columns_user} data={user} />
              <div> </div>
              <Table columns={columns_inv} data={item} />

            </Tab>
            <Tab isSelected={this.state.selected === "Functions"}>
              <p>testing</p>
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
