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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function List() {
    //navigate//
    const navigate = useNavigate();

    //useState//
    const [employees, setEmployees] = useState([]);

    //Delete//
    const deleteEmployee = async (id) => {
        try{
            // eslint-disable-next-line no-unused-vars
            const deleteEmpl = await fetch(`http://localhost:5000/employee/${id}`, {
                method: "DELETE"
            }); 
            getEmployees();
        } catch(err){
            console.error(err.message)
        }
    }
    

    //get employees//
    const getEmployees = async () => {
        try {
            const response = await fetch("http://localhost:5000/employee");
            const jsonData = await response.json();

            setEmployees(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    };

    //useEffect//
    useEffect(() => {
        getEmployees();
    }, []);


    //format date //
    const getFormattedDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('gr');
    }
    
    return <Fragment>
        <h1 align='center'>ΛΙΣΤΑ ΑΤΟΜΩΝ</h1>
        <Typography align="right" >
            <Button 
            variant="outlined" 
            color="success"
            size='large' 
            onClick={() => navigate('/insert')} 
            startIcon={<AddReactionOutlinedIcon />} 
            endIcon={<DoubleArrowIcon/>}>ΠΡΟΣΘΗΚΗ ΑΤΟΜΟΥ
            </Button>
        </Typography> 
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
                    {employees.map((employee) => (
                        <TableRow
                            key={employee.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {employee.firstname}
                            </TableCell>
                            <TableCell align="center">{employee.lastname}</TableCell>
                            <TableCell align="center">{getFormattedDate(employee.dateofbirth)}</TableCell>
                            <TableCell align="center">{employee.afm}</TableCell>
                            <TableCell align="center">
                                <Button
                                 variant="outlined" 
                                 color="warning" 
                                 onClick={() => navigate(`/${employee.id}/update`)} 
                                 endIcon={<EditIcon/>}>Ενημέρωση</Button>
                                 </TableCell>
                            <TableCell 
                            align="center" >
                                <Button 
                                variant="outlined" 
                                color="error" 
                                onClick={() => deleteEmployee(employee.id)} 
                                endIcon={<HighlightOffIcon/>}>ΔΙΑΓΡΑΦΗ</Button>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Fragment>;
}

export default List;