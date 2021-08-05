import React, { Fragment } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FormDialog from "./vacation-modal";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import moment from 'moment';
import { connect } from 'react-redux';
import {
  editVacation, follow, unFollow, deleteVacation
}
  from "../actions/vacations-action";
import { format } from "date-fns";


const useStyles = {
  root: {
    marginTop: 20,
    marginLeft: 10,
    maxWidth: 320,
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  cardIcons: {
    spacing: 8,
  },
};


class VacationCard extends React.Component {
  constructor(props) {
    super(props)


    this.addFollow = this.addFollow.bind(this)
    this.unFollow = this.unFollow.bind(this)
    this.deleteVacation = this.deleteVacation.bind(this)
    this.editVacation = this.editVacation.bind(this)
  }

  async addFollow() {
    const { vacation_id } = this.props.vacation;
    this.props.follow(vacation_id)
  }

  async unFollow() {
    const { vacation_id } = this.props.vacation;
    this.props.unFollow(vacation_id)

  }

  async deleteVacation() {
    const { vacation_id } = this.props.vacation;
    await axios.delete(`/vacations/delete-vacation/${vacation_id}`)
    this.props.deleteVacation(vacation_id)
  }

  async editVacation() {
    const { vacation_id } = this.props.vacation;
    this.props.editVacation(vacation_id)
  }

  render() {
    const { user = {}, vacation } = this.props;
    const { description, destination, from_date, to_date, img_url, price, is_admin, followed } = vacation;


    return (
      <Fragment>

        <Card style={useStyles.root} variant="outlined">
          <CardHeader title={vacation.destination} style={{ color: "blue" }} />
          <CardMedia
            style={useStyles.media}
            image={vacation.img_url}
          />
          <CardContent>
            <Typography variant="body1" component="p">

            </Typography>
          </CardContent>
          <CardContent>
            {vacation.description}
            <Typography variant="inherit" color="textSecondary" component="p">
              <p>from: {format(new Date(vacation.from_date), 'yyyy-MM-dd')}</p>
              <p>to: {format(new Date(vacation.to_date), 'yyyy-MM-dd')}</p>
              <p>price: {vacation.price} $</p>
            </Typography>
          </CardContent>
          {user.is_admin ?
            <CardActions >
              <FormDialog vacation={vacation} />
              <IconButton aria-label="delete vacation">
                <DeleteTwoToneIcon onClick={this.deleteVacation} />
              </IconButton>

            </CardActions>
            :
            <CardActions>
              <IconButton color={followed ? 'primary' : ''} aria-label="add to favorites" alt="follow click">
                <FavoriteIcon onClick={followed ? this.unFollow : this.addFollow} />

              </IconButton>

            </CardActions>

          }
        </Card>

      </Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    // authentication: state.Authentication
  }
}

export default connect(mapStateToProps, { follow, unFollow, deleteVacation, editVacation })(VacationCard)

