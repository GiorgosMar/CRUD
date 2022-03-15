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

  const navigate =  useNavigate();
  const params = useParams();
  //useStates
  const [userUpdate, setUserUpdate] = useState({
    fName: '',
    lName: '',
    dateOfBirth: '',
    afm: ''
  })
  const [errorMessage, setErrorMessage] = useState(false);

  const onSubmitFormUpadate = async e => {
    e.preventDefault();
    try{
      const body= userUpdate;
      const response = await fetch(`http://localhost:5000/employee/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
        });
        console.log(body);
        navigate('/');
    }catch (err) {
      setErrorMessage('Κάτι πήγε στραβά');
      }
  };
  
  const loadEmp = async (id) => {
    const res = await fetch(`http://localhost:5000/employee/${params.id}`);
    const data = await res.json();
    setUserUpdate({ fName: data.firstname, lName: data.lastname, dateOfBirth: data.dateofbirth, afm: data.afm });
  };

  useEffect(() => {
    if (params.id) {
      loadEmp(params.id);
    }
  }, [params.id]);
  
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
            value={userUpdate.dateOfBirth}
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