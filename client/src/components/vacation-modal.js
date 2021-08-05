import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { connect } from "react-redux";
import { addVacation, editVacation, deactivateModal, deleteVacation, updateVacation } from "../actions/vacations-action";
import BarChartIcon from '@material-ui/icons/BarChart';
import AddIcon from '@material-ui/icons/Add';
import { format } from "date-fns"; // import
import Axios from 'axios';



class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      form: this.props.vacation || {}
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  };

  handleClose = () => {
    this.setState({ open: false })

  };
  onSave = async () => {
    if (this.props.vacation) {

      const res = await Axios.patch('/vacations/edit-vacation', this.state.form);
      this.props.updateVacation(this.state.form)

    } else {

      const res = await Axios.post('/vacations/add-vacation', this.state.form);
      this.props.addVacation(this.state.form);
      this.setState({ form: {} })
    }
    this.handleClose()

  }
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } })
  }

  render() {
    const { open, form } = this.state;
    const { vacation } = this.props;
    const editIconStyle = {
      position: "relative",
      left: "100px",
      top: "100px",
    };
    return (
      <Fragment>
        <form onChange={this.onChange}>
          <Button
            color="primary"
            onClick={this.handleClickOpen}
            style={{ editIconStyle }}
          >
            {vacation ? < EditTwoToneIcon /> : <AddIcon color="secondary" />}
          </Button>
          <Dialog
            open={open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              {vacation ? 'EDIT VACATION' : 'ADD VACATION'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {vacation ? 'insert vacation changes here' : 'insert vacation details here'}
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                name="destination"
                id="destination"
                label="Destination"
                type="text"
                fullWidth
                defaultValue={form.destination}

              />
              <TextField
                autoFocus
                margin="dense"
                name="description"
                id="description"
                label="Description"
                type="text"
                fullWidth
                defaultValue={form.description}

              />

              <TextField
                autoFocus
                margin="dense"
                name="img_url"
                id="image"
                label="Image"
                type="text"
                fullWidth
                defaultValue={form.img_url}

              />

              <TextField
                autoFocus
                margin="dense"
                name="from_date"
                id="fromDate"
                label="from Date"
                type="text"
                type="date"
                fullWidth
                defaultValue={form.from_date && format(new Date(form.from_date), 'yyyy-MM-dd')}

              />

              <TextField
                autoFocus
                margin="dense"
                name="to_date"
                id="toDate"
                label="to Date"
                type="text"
                type="date"
                fullWidth
                defaultValue={form.to_date && format(new Date(form.to_date), 'yyyy-MM-dd')}

              />

              <TextField
                autoFocus
                margin="dense"
                name="price"
                id="price"
                label="price"
                type="number"
                min="0"
                defaultValue={form.price} />

            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={this.handleClose}>
                cancel
              </Button>
              <Button variant="contained" onClick={this.onSave} color="primary">
                {this.props.vacation ? 'Save' : 'create'}
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </Fragment>
    );
  }


}


const mapStateToProps = state => {
  return {
    modalMode: state.modalMode
  }
}


export default connect(mapStateToProps, { addVacation, updateVacation, editVacation })(FormDialog);

