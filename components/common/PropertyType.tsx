'use client'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PropertyType(props:any) {
  const [value, setValue] = React.useState(props.propertyType);

  console.log(value, ":property type")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl sx={{ml: 1}}>
      <FormLabel id="demo-controlled-radio-buttons-group">Property Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Commercial" control={<Radio />} label="Commercial" />
        <FormControlLabel value="Residential" control={<Radio />} label="Residential" />
      </RadioGroup>
    </FormControl>
  );
}