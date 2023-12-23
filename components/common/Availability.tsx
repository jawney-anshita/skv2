'use client'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Availability(props:any) {
  const [availability, setAvailability] = React.useState(props.availability);

  console.log(availability, ": Availabilty")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvailability((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl sx={{ml: 1}}>
      <FormLabel id="demo-controlled-radio-buttons-group">Property Availability</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={availability}
        onChange={handleChange}
      >
        <FormControlLabel value="Ready to move" control={<Radio />} label="Ready to move" />
        <FormControlLabel value="Under Construction" control={<Radio />} label="Under Construction" />
       
      </RadioGroup>
    </FormControl>
  );
}