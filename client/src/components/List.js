import React, {Fragment, useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

// import components
import Delete from "./Delete";

function List() {

    const navigate = useNavigate();

    //useState
    const [entries, setEntries] = useState([]);

    //get entries
    const getEntries = async () => {
        try {
            const response = await fetch("http://localhost:5000/employee");
            const jsonData = await response.json();
            
            setEntries(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    };

    //useEffect
    useEffect(() => {
        getEntries();
    }, []);


    //format date 
    const getFormattedDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString();
    }
   
    return <Fragment>
        <h1 align='center'>ΛΙΣΤΑ ΑΤΟΜΩΝ</h1>
        <Typography align="right" ><Button variant="outlined" color="success" size='large' onClick={() => navigate('/insert')} startIcon={<AddReactionOutlinedIcon />} endIcon={<DoubleArrowIcon/>}>ΠΡΟΣΘΗΚΗ ΑΤΟΜΟΥ</Button></Typography> 
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ΟΝΟΜΑ</TableCell>
                        <TableCell align="center">ΕΠΩΝΥΜΟ</TableCell>
                        <TableCell align="center">ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ</TableCell>
                        <TableCell align="center">Α.Φ.Μ.</TableCell>
                        <TableCell align="center">ΕΝΗΜΕΡΩΣΗ</TableCell>
                        <TableCell align="center" >ΔΙΑΓΡΑΦΗ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map((entrie) => (
                        <TableRow
                            key={entrie.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {entrie.firstname}
                            </TableCell>
                            <TableCell align="center">{entrie.lastname}</TableCell>
                            <TableCell align="center">{getFormattedDate(entrie.dateofbirth)}</TableCell>
                            <TableCell align="center">{entrie.afm}</TableCell>
                            <TableCell align="center"><Button variant="outlined" color="warning" onClick={() => navigate(`/${entrie.id}/update`)} endIcon={<EditIcon/>}>Ενημέρωση</Button></TableCell>
                            <TableCell align="center" ><Delete entrie= {entrie} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Fragment>;
}

export default List;