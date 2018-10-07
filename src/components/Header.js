import {Link} from "react-router-dom";
import React from "react";
import {connect} from 'react-redux';
import {startLogOut} from "../actions/auth";

export const Header = (props) => (
    <header className="header">

        <div className="content-container">
            <div className='header__content'>
                <Link to={'/dashboard'}
                      className="header__title"
                >
                    <h1>Expensify</h1>
                </Link>
                <button
                    className='login-button logout-button--link'
                    onClick={props.startLogOut}>Log Out</button>
            </div>
        </div>

    </header>

);

const mapDispatchToProps = (dispatch) => {
    return {
        startLogOut: () => dispatch(startLogOut())
    }
};

export default connect(undefined, mapDispatchToProps)(Header);