/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
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
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function List() {
    //navigate//
    const navigate = useNavigate();

    //useState//
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPages, setCountPages] = useState();
    const [disableNextButton, setDisableNextButton] = useState(false);
    const [disablePrevButton, setDisablePrevButton] = useState(false);



    //handler next page//
    const handlerNextPage = () => {
        if(currentPage < countPages){
            setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
        }
    };
    
    //handler next button//
    const handlerNextButton = () => {
        if(currentPage >= countPages){
            setDisableNextButton(true);
        }else{
            setDisableNextButton(false);
        }
    };

    //handler prev page//
    const handlerPrevPage = () => {
        if(currentPage>1){
            setCurrentPage(prevCurrentPage => prevCurrentPage - 1);
        }
    };

    //handler prev button//
    const handlerPrevButton = () => {
        if(currentPage == 1){
            setDisablePrevButton(true);
        }else{
            setDisablePrevButton(false);
        }
    };
    
    //Delete confirmation alert//
    const popupAlert = (id) => {
        confirmAlert({
          title: 'Διαγραφή χρήστη',
          message: 'Είστε σίγουρος/η για την διαγραφή;',
          buttons: [
            {
              label: 'Ακύρωση',
              onClick: navigate('/')
            },
            {
                label: 'Ναι',
                onClick: () => deleteEmployee(id)
            }
          ]
        });
      };

    //Delete//
    const deleteEmployee = async (id) => {
        try{
            const deleteEmpl = await fetch(`/employee/${id}`, {
                method: "DELETE"
            }); 
            getEmployees();
            navigate('/');
        } catch(err){
            console.error(err.message)
        }
    }
    
    //get employees//
    const getEmployees = async () => {
        try {
            const response = await fetch(`/employee?page=${currentPage}`);
            const getEmpl = await response.json();

            setEmployees(getEmpl.employees);
            setCountPages(getEmpl.countPages);
        } catch (err) {
            console.error(err.message);
        }
    };

    //useEffect//
    useEffect(() => {
        getEmployees();
        handlerNextButton();
    }, [currentPage]);


    //useEffect//
    useEffect(() => {
        handlerNextButton();
        handlerPrevButton();
    }, [employees]);


    //format date //
    const getFormattedDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB');
    }
    
    return <Fragment>
        <p align="left">https://github.com/GiorgosMar/CRUD</p>
        <h1 align="center">ΛΙΣΤΑ</h1>
        <Typography align="right" >
            <Button 
            variant="outlined" 
            color="success"
            size='large' 
            onClick={() => navigate('/insert')} 
            startIcon={<AddReactionOutlinedIcon />} 
            endIcon={<DoubleArrowIcon/>}>ΠΡΟΣΘΗΚΗ
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
                                onClick={() => popupAlert(employee.id)}
                                endIcon={<HighlightOffIcon/>}>ΔΙΑΓΡΑΦΗ</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Typography align="right">
                <span>Σελίδα {currentPage}η</span>
                <Button
                disabled={disablePrevButton}
                variant="raised"
                style={{ backgroundColor: 'transparent'}}
                onClick={() => handlerPrevPage()}
                ><NavigateBeforeIcon/></Button>
                <Button
                disabled={disableNextButton}
                variant="raised"
                style={{ backgroundColor: 'transparent'}}
                onClick={() => handlerNextPage()}
                ><NavigateNextIcon/></Button>
            </Typography>
        </TableContainer>
    </Fragment>;
}

export default List;
