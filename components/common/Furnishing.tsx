'use client'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Furnishing(props:any) {
  const [furnishing, setFurnishing] = React.useState(props.furnishing);

  console.log(furnishing, ": Furnishing")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFurnishing((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Furnishing Details</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={furnishing}
        onChange={handleChange}
      >
        <FormControlLabel value="Unfurnished" control={<Radio />} label="Unfurnished" />
        <FormControlLabel value="Semi Furnished" control={<Radio />} label="Semi Furnished" />
        <FormControlLabel value="Fully Furnished" control={<Radio />} label="Fully Furnished" />
      </RadioGroup>
    </FormControl>
  );
}