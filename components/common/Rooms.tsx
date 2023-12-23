'use client'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid } from '@mui/material';

export default function Rooms(props:any) {
  const [bedrooms, setBedrooms] = React.useState(props.bedrooms);
  const [washrooms, setWashrooms] = React.useState(props.washrooms);
  const [balconies, setBalconies] = React.useState(props.balconies);

  console.log(bedrooms, washrooms, balconies, ": Bedrooms, Washrooms, Balconies")
  const handleChangebedrooms = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBedrooms((event.target as HTMLInputElement).value);
  };
  const handleChangewashrooms = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWashrooms((event.target as HTMLInputElement).value);
  };
  const handleChangebalconies = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBalconies((event.target as HTMLInputElement).value);
  };
  return (
    <FormControl fullWidth>
      {/* <FormLabel id="demo-controlled-radio-buttons-group">Property Availability</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={bedrooms}
        onChange={handleChangebedrooms}
      >
        <Grid container spacing={2}>
            <Grid item xs={2}  lg={2}>
            </Grid>
            <Grid item xs={2} lg={2}>
              1
            </Grid>
            <Grid item xs={2}  lg={2}>
              2
            </Grid>
            <Grid item xs={2} lg={2}>
              3
            </Grid>
            <Grid item xs={2} lg={2}>
              4
            </Grid>
            <Grid item xs={2} lg={2}>
              5+
            </Grid>
            <Grid item xs={2} lg={2}>
              Bedrooms
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="1" control={<Radio />}  label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="2" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="3" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="4" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="5" control={<Radio />} label="" />
            </Grid>
    
       </Grid>
      </RadioGroup>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={washrooms}
        onChange={handleChangewashrooms}
      >
        <Grid container spacing={2}>
          
            <Grid item xs={2} lg={2}>
              Washrooms
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="1" control={<Radio />}  label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="2" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="3" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="4" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="5" control={<Radio />} label="" />
            </Grid>
    
       </Grid>
      </RadioGroup>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={balconies}
        onChange={handleChangebalconies}
      >
        <Grid container spacing={2}>
          
            <Grid item xs={2} lg={2}>
              Balconies
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="1" control={<Radio />}  label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="2" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="3" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="4" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="5" control={<Radio />} label="" />
            </Grid>
    
       </Grid>
      </RadioGroup>
    </FormControl>
  );
}