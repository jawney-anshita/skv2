'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Dimensions(props:any) {
  const [dimensions, setDimensions] = React.useState(props.dimensions);
  const [dunit, setDUnit] = React.useState<string | number>(props.dunit);
  console.log(dimensions, dunit, ": dimensions+unit");
  const [open, setOpen] = React.useState(false);
  console.log(dunit, ": Dmensions Unit")
  const handleChange = (event: SelectChangeEvent<typeof dunit>) => {
    setDUnit(event.target.value);
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
        label="Dimensions"
        required
        fullWidth
        value={dimensions}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setDimensions(event.target.value);
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
          value={dunit}
          label="Unit"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"sq. m."}>sq. m.</MenuItem>
          <MenuItem value={"ac"}>ac</MenuItem>
          <MenuItem value={"sq. yd."}>sq. yd.</MenuItem>
          <MenuItem value={"ha"}>ha</MenuItem>
          <MenuItem value={"sq. ft."}>sq. ft.</MenuItem>
          <MenuItem value={"sq. km."}>sq. km.</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}