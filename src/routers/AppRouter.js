import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import LoginPage from "../components/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

export default class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Switch>
                            <PublicRoute path="/" component={LoginPage} exact={true}/>
                            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                            <PrivateRoute path="/create" component={AddExpensePage}/>
                            <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                            <Route path="/help" component={HelpPage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

// const AppRouter = (
//
// );

// export default AppRouter;