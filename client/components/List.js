import React, {Fragment, useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Edit from "./Edit";
import Delete from "./Delete";

function List() {

    const [Entries, setEntries] = useState([]);

    const getEntries = async () => {
        try {
            const response = await fetch("http://localhost:5000/employee");
            const jsonData = await response.json();
            

            setEntries(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getEntries();
    }, []);

    console.log(Entries);

    //format date 
    const getFormattedDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString();
    }
   
    return <Fragment>
        
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ΟΝΟΜΑ</TableCell>
                        <TableCell align="center">ΕΠΩΝΥΜΟ</TableCell>
                        <TableCell align="center">ΗΜΕΡΟΜΗΝΙΑ ΓΕΝΝΗΣΗΣ</TableCell>
                        <TableCell align="center">ΑΦΜ</TableCell>
                        <TableCell align="center">ΕΝΗΜΕΡΩΣΗ</TableCell>
                        <TableCell align="center" >ΔΙΑΓΡΑΦΗ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Entries.map((Entrie) => (
                        

                        <TableRow
                            key={Entrie.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {Entrie.fname}
                            </TableCell>
                            <TableCell align="center">{Entrie.lname}</TableCell>
                            <TableCell align="center">{getFormattedDate(Entrie.date_of_birth)}</TableCell>
                            <TableCell align="center">{Entrie.afm}</TableCell>
                            <TableCell align="center"><Edit Entrie = {Entrie} /></TableCell>
                            <TableCell align="center" ><Delete Entrie= {Entrie} /></TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    </Fragment>;
}

export default List;