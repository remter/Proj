import React, { Component } from "react";

class Tab extends Component{
    render(){
        //if selected return the properties in the Tab
        if(this.props.isSelected){
        return(
            <div>
                {this.props.children}
            </div>
        );
        }
        //If not selected don't return.
        return null;
    }
}
export default Tab;