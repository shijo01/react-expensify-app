import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"

export default class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Switch>
                            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                            <Route path="/create" component={AddExpensePage}/>
                            <Route path="/edit/:id" component={EditExpensePage}/>
                            <Route path="/help" component={HelpPage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

// const AppRouter = (
//
// );

// export default AppRouter;