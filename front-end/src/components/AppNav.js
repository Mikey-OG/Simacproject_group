import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import '../App.css';
//import {AuthenticationState, AzureAD} from "react-aad-msal";
//import {AuthenticationState, AzureAD} from "react-aad-msal";
//import { authProvider} from "../authProvider";
import {Link} from "react-router-dom";


class AppNav extends Component {
    //state = {  }
    constructor(props){
        super(props);

        this.state = {
            showLogoutDialog: false,
        };

        this.openLogoutDialog = this.openLogoutDialog.bind(this);
        this.closeLogoutDialog = this.closeLogoutDialog.bind(this);
    }

    openLogoutDialog(){
        this.setState({showLogoutDialog: true});
    }

    closeLogoutDialog(){
        this.setState({showLogoutDialog: false});
    }
    logout(){
        this.closeLogoutDialog();
    }
    render() {
        return (

           
            <div>
                <Navbar className="color-nav" dark expand="md">
                    <NavbarBrand href="/">Exams Manager</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/exams">Exams Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/addexam">Add Exam</NavLink>
                        </NavItem>
                    </Nav>
                  
                </Navbar>
            </div>
        )                      
    }
}

export default AppNav;
