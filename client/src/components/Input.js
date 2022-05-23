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
import Alert from '@mui/material/Alert';
import { Container, experimental_sx } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { DatePicker } from "@mui/lab";


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
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmitForm = async e => {
    e.preventDefault();
    try{
      //pass 2 headers
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.Token);
      const response = await fetch(`/employee?afm=${userInsert.afm}`, {
        headers: myHeaders,
      });
      const returnAfm = await response.json();

      if (userInsert.afm === null) {
        setErrorMessage("To πεδίο ΑΦΜ δεν μπορει να ειναι κενό!");
      }else if (userInsert.afm.length < 9 || userInsert.afm.length > 9) {
        setErrorMessage("To πεδίο ΑΦΜ πρέπει να περιέχει 9 ψηφία!");
      }else if (returnAfm.afm != userInsert.afm) {
        const body = userInsert;
        await fetch("/employee", {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(body),
        });
        navigate("/");
      }else{
        setErrorMessage("Το Α.Φ.Μ. υπάρχει ήδη!");
      }
    }catch (err) {
      setErrorMessage("Κάτι πήγε στραβά!");
    }
  };

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-CA");
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
        InputLabelProps={{
          shrink: true,
        }}
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
        InputLabelProps={{
          shrink: true,
        }}
        onChange={e => setUserInsert({
          ...userInsert,
          lName: e.target.value
        })}
        />
        <DatePicker
        inputFormat="dd/MM/yyyy"
        label="ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ"
        value={new Date(userInsert.dateOfBirth)}
        onChange={(date) => {
          setUserInsert({
            ...userInsert,
            dateOfBirth: getFormattedDate(date),
            });
          }}
          renderInput={(params) => <TextField {...params} />}
          />
        <TextField
        margin="dense"
        id="afm"
        label="Α.Φ.Μ."
        type="text"
        fullWidth
        variant="standard"
        value={userInsert.afm}
        InputLabelProps={{
          shrink: true,
        }}
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