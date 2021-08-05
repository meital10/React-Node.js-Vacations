import React from 'react';
import {
    Grid, TextField, Button, Avatar, Paper,
    CssBaseline, Box, Typography
}
    from '@material-ui/core';

import { login, checkUserAuthentication, setUser } from '../actions/login-action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
         My Vacations Project 2020
        </Typography>
    );
}

const useStyles = {
    root: {
        height: '100vh',
        paddingTop: '30px',
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    paper: {
        paddingTop: '30px',
        marginRight: '50px',
        marginBottom: '290px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        align: 'center'
    },
    image: {
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        backgroundPosition: 'center',
        paddingLeft: '20px',

    },
    form: {
        width: '100%',
        marginTop: '20px',
    },
    submit: {
        Button: '20px',
    },
    avatar: {
        alignItems: 'center'
    }

};

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            is_admin: ''

        }
    }

    onChange(field, value) {
        this.setState({ [field]: value });
    }

    async onClick() {
        try {
            const { username, password } = this.state;
            const { data } = await axios.post('/auth/login', this.state);
            this.props.setUser(data.user)
            this.props.history.push('/home');
        } catch (err) {
            this.setState({ error: true });
            console.log(err);
        }
    }

    render() {
        return (

            <Grid container component="main" style={useStyles.root} spacing={6}>
                <CssBaseline />
                <Grid item xs={12} sm={6} >
                    <img src="https://kedm.co.il/wp-content/uploads/2019/12/%D7%97%D7%95%D7%A4%D7%A9%D7%94-%D7%91%D7%9E%D7%9C%D7%93%D7%99%D7%91%D7%99%D7%9D-%D7%A2%D7%9D-%D7%A7%D7%93%D7%9D-1-1024x731.jpg" alt="fronImage"
                        style={useStyles}
                    />
                </Grid>

                <div />
                <Grid item xs={12} sm={6} component={Paper} square  >
                    <div style={useStyles.paper}>
                        <Avatar style={useStyles.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" >
                            Please Login
          </Typography>
                        <form style={useStyles.form} noValidate>
                            <TextField
                                name="username"
                                id="username"
                                type="text"
                                label="Username"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                autoComplete="on"
                                // autoComplete="current-name"
                                autoFocus
                                onChange={({ target: { value } }) => this.onChange('username', value)}
                            />

                            <TextField
                                name="password"
                                id="password"
                                type="password"
                                label="Password"
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                autoComplete="current-password"
                                onChange={({ target: { value } }) => this.onChange('password', value)}
                            />

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={useStyles.submit}
                                onClick={() => this.onClick()}
                            >
                                Login
                              </Button>

                            <Grid container>

                                <Grid item>
                                    <Typography>
                                        <Link to="/signup" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Copyright />
                            </Box>
                        </form>

                    </div>
                </Grid>
            </Grid>
        );
    }


}


const mapDispatchToProps = dispatch => {
    return {
        checkUserAuthentication: () => dispatch(checkUserAuthentication()),
        login: (userDetails, props) => dispatch(login(userDetails, props)),
        setUser: user => dispatch(setUser(user))

    }
}


const mapStateToProps = state => {
    return {
        authentication: state.Authentication
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

