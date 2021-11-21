import React, { Component } from "react";
import httpCalls from "../Requests/httpCalls";

var url_parm = "users";
class getForm extends Component{
    
    async  update_data_users(id) {
        this.setState({ isLoading: true });
        let data = [];
        url_parm = "user/un";
        
        try{
          //create a class with http calls
          let cal = new httpCalls("http://localhost:8080/");
          data = await cal.a_get_ind(url_parm, id);
          console.log(data);
          this.setState( {user: data });
        }
        catch (e){
          console.log(e);
        }
        this.setState({ isLoading: false });
    }
    
    
    constructor(props) {
        super(props);
        this.state = {value: '', submitted: false, user: [], isLoading:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChange(e) {
        this.setState({value: e.target.value});
    }
    handleSubmit(e) {
        console.log(this.state.value)
        this.setState({submitted:true});
        this.update_data_users(this.state.value);

        e.preventDefault();
    }
    render(){
        if (!this.state.submitted){
        return(
            <form onSubmit ={this.handleSubmit}>
            <label>
                Username:
                <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
        }
        else{
            return(
                <div>
                    <form onSubmit ={this.handleSubmit}>
                        <label>
                            Username:
                            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    <div>
                        <div>
                            Result
                        </div>
                        <p>{`Full Name: ${this.state.user.name} `}</p>
                        <p>{`Username: ${this.state.user.userName}`}</p>
                        <p>{`Role: ${this.state.user.role}`}</p>
                    </div>
                </div>
            )
        }
    }
}
export default getForm;