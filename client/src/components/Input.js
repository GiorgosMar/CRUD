import React, {Fragment, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Typography from '@material-ui/core/Typography';

const Input = () =>{
    
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [Date_of_birth, setDate_of_birth] = useState("");
    const [Afm, setAfm] = useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
         setOpen(false);
         setFname("");
         setLname("");
         setDate_of_birth("");
         setAfm("");
    };

    const onSubmitForm = async e => {
        e.preventDefault();
        try{
            const body= {Fname, Lname, Date_of_birth, Afm};
            const response = await fetch("http://localhost:5000/employee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = '/';
        }catch (err) {
            console.log(err.message);
        }
    };

    return <Fragment>
        <h1 align='center'>ΛΙΣΤΑ ΑΤΟΜΩΝ</h1>
        <Button align='right' variant="outlined" color="success" size='large' onClick={handleClickOpen} startIcon={<AddReactionOutlinedIcon />} endIcon={<DoubleArrowIcon/>}>ΠΡΟΣΘΗΚΗ ΑΤΟΜΟΥ</Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ΕΓΓΡΑΦΗ</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ΕΙΣΑΓΕΤΕ ΤΑ  ΣΤΟΙΧΕΙΑ.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Fname"
            label="ONOMA"
            type="text"
            fullWidth
            variant="standard"
            value={Fname}
            onChange={e => setFname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Lname"
            label="ΕΠΩΝΥΜΟ"
            type="text"
            fullWidth
            variant="standard"
            value={Lname}
            onChange={e => setLname(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Date_of_birth"
            label="ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ"
            type="date"
            fullWidth
            variant="standard"
            value={Date_of_birth}
            onChange={e => setDate_of_birth(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="Afm"
            label="ΑΦΜ"
            type="text"
            fullWidth
            variant="standard"
            value={Afm}
            onChange={e => setAfm(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>ΠΙΣΩ</Button>
          <Button color="success" onClick={onSubmitForm}>ΕΓΓΡΑΦΗ</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
};

export default Input;