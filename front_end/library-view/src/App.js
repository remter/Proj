
import React, { Component } from 'react';
import './App.css';
import httpCalls from './Requests/httpCalls';
import InvTable from './components/InvTable';
var url_parm = "";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      item: []
    };
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
  
  async componentDidMount() {
    await this.update_data_items();
  }
  

  render(){
    const {item, isLoading} = this.state;

    //If stuck or waiting
    if (isLoading){
      return  (
        <div className="App">
        <header className="App-header">
          <h1> Loading </h1>
          <div>Loading... </div> 
        </header>
      </div>)
    }
    return (
      <div className="App">
        <header className="App-header">
         <InvTable inv = {item}></InvTable>
        </header>
      </div>
    );
  }
}

export default App;
