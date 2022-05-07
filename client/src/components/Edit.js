/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, {Fragment, useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import { Container } from "@mui/material";
import { useNavigate, useParams  } from "react-router-dom";
import { DatePicker } from "@mui/lab";


const Edit = ({ setAuth }) =>{
  //navigate//
  const navigate =  useNavigate();
  
  //useParams//
  const params = useParams();
  
  //useStates//
  const [userUpdate, setUserUpdate] = useState({
    fName: null,
    lName: null,
    dateOfBirth: null,
    afm: null
  })
  const [errorMessage, setErrorMessage] = useState(false);

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  //Update Employee//
  const onSubmitFormUpadate = async e => { 
    e.preventDefault();
    try{
      const response = await fetch(`/employee/?afm=${userUpdate.afm}`);
      const returnEmployee = await response.json();

      if (userUpdate.afm.length === 0) {
        setErrorMessage("To πεδίο ΑΦΜ δεν μπορει να ειναι κενό!");
      }else if (userUpdate.afm.length < 9 || userUpdate.afm.length > 9) {
        setErrorMessage("To πεδίο ΑΦΜ πρέπει να περιέχει 9 ψηφία!");
      }else if (returnEmployee.afm !== userUpdate.afm || returnEmployee.id == params.id) {
        await fetch(`/employee/${params.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userUpdate),
        });
        navigate("/");
      }else{
        setErrorMessage("Το Α.Φ.Μ. υπάρχει ήδη!");
      }
    }catch (err) {
      setErrorMessage('Κάτι πήγε στραβά');
      }
  };
  
  //Load Employee//
  const loadEmp = async (id) => {
    const res = await fetch(`/employee/${params.id}`);
    const data = await res.json();
    setUserUpdate({ 
      fName: data.firstname, 
      lName: data.lastname,
      dateOfBirth: getFormattedDate(data.dateofbirth),
      afm: data.afm });
  };

  //useEffect//
  useEffect(() => {
    if (params.id) {
      loadEmp(params.id);
    }
  }, [params.id]);
  
   //Format Date//
  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-CA');
  }
  
  return <Fragment>
        <Dialog open>
          <DialogTitle>ΕΝΗΜΕΡΩΣΗ</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ΕΙΣΑΓΕΤΕ ΤΑ  ΣΤΟΙΧΕΙΑ.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="fName"
            label="ONOMA"
            type="text"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            value={userUpdate.fName}
            onChange={e => setUserUpdate({
              ...userUpdate,
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
            InputLabelProps={{
              shrink: true,
            }}
            value={ userUpdate.lName }
            onChange={e => setUserUpdate({
              ...userUpdate,
              lName: e.target.value
            })}
          />
             <DatePicker
            inputFormat="dd/MM/yyyy"
            label="ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ"
            value={new Date(userUpdate.dateOfBirth)}
            onChange={(date) => {
              setUserUpdate({
                ...userUpdate,
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
            InputLabelProps={{
              shrink: true,
            }}
            value={userUpdate.afm}
            onChange={e => setUserUpdate({
              ...userUpdate,
              afm: e.target.value
            })}
          />
        </DialogContent>
        <Container>{ errorMessage && <Alert severity="error">{errorMessage}</Alert>}</Container>
        <DialogActions>
          <Button color="error" onClick={()=>navigate('/')}>ΠΙΣΩ</Button>
          <Button color="success" onClick={onSubmitFormUpadate}>Ενημέρωση</Button>
        </DialogActions>
      </Dialog>
      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button>
    </Fragment>
}

export default Edit;
