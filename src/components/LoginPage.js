import React from 'react';
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";


export const LoginPage = (props) => {
    return (
        <div>
            <button onClick={props.startLogin}>
                Login
            </button>
        </div>
    )

};


const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
};

export default connect(undefined, mapDispatchToProps)(LoginPage);