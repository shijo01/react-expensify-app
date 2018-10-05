import {NavLink} from "react-router-dom";
import React from "react";
import {connect} from 'react-redux';
import {startLogOut} from "../actions/auth";

export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to={'/dashboard'} activeClassName={'is-active'}>Home</NavLink>
        <NavLink to={'/create'} activeClassName={'is-active'}>Add</NavLink>
        <button onClick={props.startLogOut}>Log Out</button>
    </header>

);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogOut: () => dispatch(startLogOut())
    }
};

export default connect(undefined, mapDispatchToProps)(Header);