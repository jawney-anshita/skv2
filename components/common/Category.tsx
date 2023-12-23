'use client'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Category(props:any) {
  const [category, setCategory] = React.useState<string | number>(props.category);
  const [open, setOpen] = React.useState(false);
  console.log(category, ": category")
  const handleChange = (event: SelectChangeEvent<typeof category>) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen} fullWidth>
        Property Category
      </Button> */}
      <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
        <InputLabel id="demo-controlled-open-select-label" onClick={handleOpen}>Category</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          label="Category"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"apartment"}>Apartment</MenuItem>
          <MenuItem value={"independent house"}>Independent House / Villa</MenuItem>
          <MenuItem value={"plot"}>Plot / Land</MenuItem>
          <MenuItem value={"service apartment"}>Service Apartment</MenuItem>
          <MenuItem value={"farm house"}>Farm House</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}