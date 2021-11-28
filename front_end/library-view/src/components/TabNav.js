import React, { Component } from "react";

class TabNav extends Component{

    render(){
        return(
            <div>
                <ul className = "nav nav-tabs">
                    {
                        this.props.tabs.map(tab =>{
                            // check if tab is active if not then set empty style
                            const active = (tab === this.props.selected ? 'active' : '');

                            return(
                                <li className="nav-item" key = {tab}>
                                    {/* only the active tabs are rendered correctly */}
                                    <a className={"nav-link" + active} onClick={()=> this.props.setSelected(tab)}>
                                        {tab}
                                    </a>
                                </li>
                            )

                        })
                    }
                </ul>
                {this.props.children}
            </div>
        )
    }
}
export default TabNav;