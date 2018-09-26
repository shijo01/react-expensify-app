import {NavLink} from "react-router-dom";
import React from "react";

const NotFoundPage = () => (
    <div>
        <p>Page not found 404!</p>
        <p>
            <NavLink to='/'>Go Home</NavLink>
        </p>
    </div>
);

export default NotFoundPage;

