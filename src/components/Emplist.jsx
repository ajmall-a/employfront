import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Typography } from '@mui/material';

const Home = () => {
    const [employee,setEmployee] = useState([]);
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        console.log(res.data);
        setEmployee(res.data);
      })
  },[])
  return (
    <div style={{ backgroundColor: 'lightblue', textAlign: 'center', minHeight: '100vh' }}>
      <br></br>
      <Typography variant='h4' style={{textAlign:'center', color:'black', fontFamily:'Times New Roman'}} >EMPLOYEE LIST</Typography>
    <TableContainer component={Paper} style={{alignContent:'center'}} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>E-mail</b></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {employee.map((item, index) => (
        <TableRow  
        key={index}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.email}</TableCell>
        </TableRow>
      ))}
         
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home