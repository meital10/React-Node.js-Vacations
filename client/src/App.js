import React from "react";
import VacationsWrapper from "./components/vacations-wrapper";
import Login from "./components/login";
import SignUp from "./components/signup";
import { closeSnackBarAction, currentUser } from "./actions/login-action";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomizedSnackbars from "./components/snackbar";
import { connect } from "react-redux";
import VacationChart from './components/chart'
// provider, composeEnhancer and store are in the index.js file

class App extends React.Component {

    componentDidMount() {
        this.props.currentUser()
    }
    render() {
        const { snackBar, closeSnackBar, ready } = this.props;
        const { sbOpened, sbMessage, sbSevirity } = snackBar;
        if (!ready) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div>
                <CustomizedSnackbars
                    open={sbOpened}
                    message={sbMessage}
                    sevirity={sbSevirity}
                    closeSbAction={closeSnackBar}
                />

                <Router>

                    <Switch>
                        <Route path="/signup" component={SignUp} />
                        <Route path="/login" component={Login} exact={true} />
                        <Route path="/home" component={VacationsWrapper} />
                        <Route path="/chart" component={VacationChart} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeSnackBar: () => dispatch(closeSnackBarAction()),
        currentUser: () => dispatch(currentUser())
    };
};

const mapStateToProps = (state) => {
    return {
        snackBar: state.globalReducers,
        ready: state.globalReducers.ready,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

