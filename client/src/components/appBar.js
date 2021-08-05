import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import BarChartIcon from '@material-ui/icons/BarChart';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/login-action'
import FormDialog from './vacation-modal';
import { format } from "date-fns";


const useStyles = {
    root: {
        flexGrow: '1',
    },
    menuButton: {
        marginRight: 'spacing(2)',
    },
    button: {
        marginLeft: 'spacing(2)',
    },
    title: {
        flexGrow: 1,
    },
};


class Header extends React.Component {

    goTo = path => {
        this.props.history.push(path);

    }
    async logout() {
        try {
            await axios.get('/auth/logout');
            this.props.logout();
            this.props.history.push('/login');
        } catch (err) {
            this.props.history.push('/login');
        }
    }


    render() {
        const { user } = this.props;
        console.log('user', user);

        if (!user) return null;
        return (

            <div style={useStyles.root}>
                <AppBar position="static">
                    <Toolbar>
                        {!!user.is_admin && <IconButton  color="inherit" aria-label>

                            <FormDialog />
                            <BarChartIcon onClick={() => this.goTo('/chart')} />

                        </IconButton>}
                        <Typography variant="h6" style={useStyles.title}>
                            <span>Hello </span>
                            <span> {user.username}</span>
                        </Typography>

                        <Button style={useStyles.button} onClick={() => this.logout()} color="inherit">Logout</Button>


                    </Toolbar>
                </AppBar>
            </div>
        );
    }

}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { logout })(withRouter(Header))