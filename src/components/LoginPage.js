import React from 'react';
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {startLogin} from "../actions/auth";


export const LoginPage = (props) => {
    return (
        <div className='box-layout'>
            <div className='box-layout__box'>
                <h1 className="box-layout__title">Expensify</h1>
                <p>Its time to get your expenses under control.</p>
                <button
                    className='login-button'
                    onClick={props.startLogin}
                >
                    Login with Google
                </button>
            </div>
        </div>
    )

};


const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
};

export default connect(undefined, mapDispatchToProps)(LoginPage);