import React, { Component } from "react";
import Navbar from "../navbar/navbar";

class Header extends Component{
    render(){
        return (<header className="header">
            Header
            <Navbar/>
        </header>);
    }
}

export default Header;