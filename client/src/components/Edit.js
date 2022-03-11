import React, {Fragment, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';


    


const Edit = ({Entrie}) =>{

    const [Fname, setFname] = useState(Entrie.fname);
    const [Lname, setLname] = useState(Entrie.lname);
    const [Date_of_birth, setDate_of_birth] = useState(Entrie.date_of_birth);
    const [Afm, setAfm] = useState(Entrie.afm);
    const [open, setOpenUpdate] = React.useState(false);

    const handlerClickOpen = () => {
        setOpenUpdate(true);
    };

    const handlerClose = () => {
         setOpenUpdate(false);
         setFname(Entrie.fname);
         setLname(Entrie.lname);
         setDate_of_birth(Entrie.date_of_birth);
         setAfm(Entrie.afm);

    };

    const onSubmitFormUpadate = async e => {
        e.preventDefault();
        try{
            const body= {Fname, Lname, Date_of_birth, Afm};
            const response = await fetch(`http://localhost:5000/employee/${Entrie.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = '/';
        }catch (err) {
            console.log(err.message);
        }
    };

    return <Fragment>
        <Button variant="outlined" color="warning" onClick={handlerClickOpen} endIcon={<EditIcon/>}>Ενημέρωση</Button>
        <Dialog open={open} onClose={handlerClose}>
        <DialogTitle>ΕΝΗΜΕΡΩΣΗ</DialogTitle>
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
            label="ΕΠΝΥΜΟ"
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
          <Button color="error" onClick={handlerClose}>ΠΙΣΩ</Button>
          <Button color="success" onClick={onSubmitFormUpadate}>Ενημέρωση</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
}

export default Edit;