import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const Empform = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', textAlign: 'center', minHeight: '100vh' }}>
      <Typography variant="body1" sx={{ lineHeight: '2', letterSpacing: '1px', textDecoration: 'underline', textTransform: 'uppercase' }}>
      <b>  Employee Form </b>
      </Typography>
      <br></br>
      
      <Box>
        <div>
          <TextField
            id="outlined-required"
            label="Name"
          />
        </div>
        <br></br>
        <div>
          <TextField
            id="outlined-required"
            label="Designation"
          />
        </div>
        <br></br>
        <div>
          <TextField
            id="outlined-required"
            label="Location"
          />
        </div>
        <br></br>
        <div>
          <TextField
            id="outlined-required"
            label="Salary"
          />
        </div>
        <br></br>
      </Box>
      
      <Button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Submit</Button>
    </div>
  );
};

export default Empform;
