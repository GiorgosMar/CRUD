/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
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
import Alert from '@mui/material/Alert';
import { Container, experimental_sx } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Input = () =>{
  //navigate//
  const navigate = useNavigate();
  
  //useStates//
  const [userInsert, setUserInsert] = useState({
    fName: null,
    lName: null,
    dateOfBirth: null,
    afm: null
  })
  const [userCheck, setUserCheck] = useState({
    afm: null
  })
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmitForm = async e => {
    e.preventDefault();
    try{
      const response = await fetch(`http://localhost:5000/employee?afm=${userInsert.afm}`);
      const returnAfm = await response.json();

     if(returnAfm.afm !== userInsert.afm){
        const body= userInsert;
        const response = await fetch("http://localhost:5000/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      navigate('/');
      }else{
        setErrorMessage("Το Α.Φ.Μ. υπάρχει ήδη!");
    }
    }catch (err) {
      setErrorMessage(err.message);
    }
  };
  
  return <Fragment>
    <Dialog open>
      <DialogTitle>ΕΓΓΡΑΦΗ</DialogTitle>
      <DialogContent>
        <DialogContentText>ΕΙΣΑΓΕΤΕ ΤΑ ΣΤΟΙΧΕΙΑ.</DialogContentText>
        <TextField
        autoFocus
        margin="dense"
        id="fName"
        label="ONOMA"
        type="text"
        fullWidth
        variant="standard"
        value={userInsert.fName}
        onChange={e => setUserInsert({
          ...userInsert,
          fName: e.target.value
        })}
        />
        <TextField
        margin="dense"
        id="lName"
        label="ΕΠΩΝΥΜΟ"
        type="text"
        fullWidth
        variant="standard"
        value={userInsert.lName}
        onChange={e => setUserInsert({
          ...userInsert,
          lName: e.target.value
        })}
        />
        <TextField
        margin="dense"
        id="dateOfBirth"
        label="ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ"
        type="date"
        fullWidth
        variant="standard"
        value={userInsert.dateOfBirth}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e => setUserInsert({
          ...userInsert,
          dateOfBirth: e.target.value
        })}
        />
        <TextField
        margin="dense"
        id="afm"
        label="Α.Φ.Μ."
        type="text"
        fullWidth
        variant="standard"
        value={userInsert.afm}
        onChange={e => setUserInsert({
          ...userInsert,
          afm: e.target.value
        })}
        />
        </DialogContent>
        <Container>
          { errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        </Container>
        <DialogActions>
          <Button color="error" onClick={() => navigate('/')}>ΠΙΣΩ</Button>
          <Button color="success" onClick={onSubmitForm}>ΕΓΓΡΑΦΗ</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
};

export default Input;