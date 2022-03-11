import React, {Fragment} from 'react';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Delete = ({Entrie}) =>{
    
    const deleteElement = async (id) => {
        try{
            const deleteEl = await fetch(`http://localhost:5000/employee/${id}`, {
                method: "DELETE"
            }); 
            window.location = '/';
        } catch(err){
            console.error(err.message)
        }
    }
    
    return <Fragment>
        <Button variant="outlined" color="error" onClick={() => deleteElement(Entrie.id)} endIcon={<HighlightOffIcon/>}>ΔΙΑΓΡΑΦΗ</Button>
    </Fragment>
}

export default Delete;
