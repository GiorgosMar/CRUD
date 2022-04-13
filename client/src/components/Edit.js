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

const Edit = () =>{
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

  //Update Employee//
  const onSubmitFormUpadate = async e => { 
    e.preventDefault();
    try{
      const response = await fetch(`/employee/?afm=${userUpdate.afm}`);
      const returnEmployee = await response.json();

      if(returnEmployee.afm != userUpdate.afm && userUpdate.length == 9 || returnEmployee.id == params.id){
      const body= userUpdate;
      const response = await fetch(
        `/employee/${params.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userUpdate)
        });
      console.log(body);
      navigate('/');  
      }else if(userUpdate.afm.length === 0){
        setErrorMessage("Το πεδίο Α.Φ.Μ. δεν μπορεί να είναι κενό!");
      }else if(userUpdate.afm.length < 9 || userUpdate.afm.length > 9 ){
        setErrorMessage("Το πεδίο Α.Φ.Μ. πρέπει να έχει 9 ψηφία!");
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
            value={ userUpdate.lName }
            onChange={e => setUserUpdate({
              ...userUpdate,
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
            value={getFormattedDate(userUpdate.dateOfBirth)}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={e => setUserUpdate({
              ...userUpdate,
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
    </Fragment>
}

export default Edit;
