import React from "react";
import {
  Grid, TextField, Button, Avatar, Paper, CssBaseline,
  Box, Typography,
} from "@material-ui/core";
import { signup, checkUserAuthentication, openSnackBarAction, closeSnackBarAction } from "../actions/login-action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";
import _ from "lodash";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      My Vacations Project 2020
    </Typography>
  );
}

const useStyles = {
  root: {
    height: "100vh",
    paddingTop: '30px',
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    paddingTop: "30px",
    marginRight: "50px",
    marginBottom: "180px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    align: "center",
  },

  image: {
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    backgroundPosition: "center",
    paddingLeft: "20px",

  },

  form: {
    width: "100%",
    marginTop: "20px",
  },
  submit: {
    Button: "20px",
  },
  avatar: {
    alignItems: "center",
  },
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      is_admin: ""

    };
  }

  componentDidMount() {
    this.props.checkUserAuthentication();
  }

  onChange(field, value) {
    this.setState({ [field]: value });
  }

  async onClick() {
    try {
      const { first_name, last_name, username, password } = this.state;
      validateForm({ first_name, last_name, username, password });
      const { data } = await axios.post('/auth/signup', this.state)
      this.props.closeSnackBarAction()
      this.props.history.push('/login');
    } catch (err) {
      this.setState({ error: true });
      console.log(err);
      this.props.openSnackBar({ sbMessage: err.message, sbSevirity: "error" });
      this.setState({ error: true, messageError: err.message });
    }
  }


  render() {
    return (
      <div>
        <Grid container component="main" style={useStyles.root} spacing={6}>
          <CssBaseline />

          <Grid item xs={12} sm={6}>
            <div style={useStyles.image}>
              <img
                src="https://kedm.co.il/wp-content/uploads/2019/12/%D7%97%D7%95%D7%A4%D7%A9%D7%94-%D7%91%D7%9E%D7%9C%D7%93%D7%99%D7%91%D7%99%D7%9D-%D7%A2%D7%9D-%D7%A7%D7%93%D7%9D-1-1024x731.jpg"
                alt="fronImage"
              />{" "}
            </div>
          </Grid>

          <div />
          <Grid item xs={12} sm={6} component={Paper} square>
            <div style={useStyles.paper}>
              <Avatar style={useStyles.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Please Sign Up
              </Typography>
              <form className={useStyles.form} noValidate>
                <TextField
                  name="first_name"
                  id="first_name"
                  type="text"
                  label="first name"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="off"
                  autoFocus
                  onChange={({ target: { value } }) =>
                    this.onChange("first_name", value)
                  }
                />

                <TextField
                  name="last_name"
                  id="last"
                  type="text"
                  label="last name"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="off"
                  autoFocus
                  onChange={({ target: { value } }) =>
                    this.onChange("last_name", value)
                  }
                />

                <TextField
                  name="username"
                  id="username"
                  type="text"
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="off"
                  autoFocus
                  onChange={({ target: { value } }) =>
                    this.onChange("username", value)
                  }
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
                  onChange={({ target: { value } }) =>
                    this.onChange("password", value)
                  }
                />

                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={useStyles.submit}
                  onClick={() => this.onClick()}
                >
                  Sign Up
                </Button>
                <Grid container>
                  {this.state.error && (
                    <span style={{ color: "red" }}>
                      {this.state.messageError}{" "}
                    </span>
                  )}
                </Grid>
                <Grid container>
                  <Grid item>
                    <Typography>
                      <Link to="/login" variant="body2">
                        {"Have an account?"}
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
      </div>
    );
  }
}

function validateForm(payload) {
  const { first_name, last_name, username, password } = payload;
  if (!first_name || !last_name || !username || !password)
    throw new Error("Missing params");
}

const mapDispatchToProps = (dispatch) => {
  return {
    openSnackBar: (snackBarOpt) => dispatch(openSnackBarAction(snackBarOpt)),
    checkUserAuthentication: () => dispatch(checkUserAuthentication()),
    signup: (userDetails) => dispatch(signup(userDetails)),
    closeSnackBarAction: () => dispatch(closeSnackBarAction())

  };
};

const mapStateToProps = (state) => {
  return {
    authentication: state.Authentication,
    userReducer: state.userReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
