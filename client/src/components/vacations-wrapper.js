import React, { Fragment } from "react";
import VacationCard from './vacation-card';
import FormDialog from "./vacation-modal";
import _ from "lodash";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
// import { checkUserAuthentication } from '../actions';
import Header from "./appBar";
import { fetchVacations } from "../actions/vacations-action";
import { Redirect } from 'react-router-dom'



const VACATION_ENDPOINT = "/vacations";

const useStyles = {
  gridCointainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  button: {
    marginLeft: 'spacing(2)',
  },
};

class VacationsWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      destination: "",
      description: "",
      from_date: "",
      to_date: "",
      price: "",
      img_url: "",
      id: null,
      vacations: []
    };
  }

  componentDidMount() {
    //   this.props.checkUserAuthentication();
    fetchVacations();
  }

  render() {
    const { vacations, user } = this.props;
    if (!user) return <Redirect to="/login" />;
    return (

      <div>
        <Header />

        <Grid container spacing={4} className={useStyles.gridCointainer}>
          <VacationsList vacations={vacations}

          />

        </Grid>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    authentication: state.Authentication,
    vacations: state.VacationsReducer.vacations,
    user: state.user
  };
};


export default connect(mapStateToProps, null)(VacationsWrapper);

function VacationsList(props) {
  const { vacations } = props;
  if (!Array.isArray(vacations)) return null;
  return vacations.map((vacation, idx) => {
    return (
      <Grid key={idx} item xs={12} sm={6} md={3}>
        < VacationCard vacation={vacation} />

      </Grid>
    );
  });
}




