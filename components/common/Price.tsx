'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Price(props:any) {
  const [price, setPrice] = React.useState(props.price);
  const [punit, setPUnit] = React.useState<string | number>(props.punit);
  console.log(price, punit, ": Price+unit");
  const [open, setOpen] = React.useState(false);
  console.log(punit, ": Price Unit")
  const handleChange = (event: SelectChangeEvent<typeof punit>) => {
    setPUnit(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box
      component="form" 
      sx={{
        '& > :not(style)': { my: 1,  width: 1 }, display: 'flex', justifyContent: 'space-between'
      }}
      noValidate
      autoComplete="off"
     
    >
      <TextField
        sx={{ml: 1}}
        id="outlined-controlled"
        label="Property Price"
        required
        fullWidth
        value={price}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPrice(event.target.value);
        }}
      />
      {/* <TextField
        id="outlined-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
      /> */}
           <FormControl sx={{ my: 1, mr: -1, maxWidth: 100}} >
        <InputLabel id="demo-controlled-open-select-label" onClick={handleOpen} >Unit</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={punit}
          label="in Rupees"
          onChange={handleChange}
          fullWidth
        >
         
          <MenuItem value={"thousand"}>Thousands</MenuItem>
          <MenuItem value={"lakh"}>Lakhs</MenuItem>
          <MenuItem value={"crore"}>Crores</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
  );
}