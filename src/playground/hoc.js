//Higher Order Components (HOC) - A HOC is the component that renders other components
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info about {props.info}</p>
    </div>
);

//HOC
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Only admins should see</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

//HOC
const withAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Not authenticated</p>}
        </div>
    );
}

const AuthInfo = withAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} isAdmin={true} info={'Secret'}/>, document.getElementById('app'));