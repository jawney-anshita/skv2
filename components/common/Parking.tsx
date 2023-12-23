'use client'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid } from '@mui/material';

export default function Rooms(props:any) {
  const [openParking, setOpenParking] = React.useState(props.openParking);
  const [closedParking, setClosedParking] = React.useState(props.closedParking);
  

  console.log(openParking, closedParking,  ": Open Parking, Closed Parking")
  const handleChangeOpenParking = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenParking((event.target as HTMLInputElement).value);
  };
  const handleChangeClosedParking = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClosedParking((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl fullWidth>
      {/* <FormLabel id="demo-controlled-radio-buttons-group">Property Availability</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={openParking}
        onChange={handleChangeOpenParking}
      >
        <Grid container spacing={2}>
            <Grid item xs={2}  lg={2}>
            </Grid>
            <Grid item xs={2} lg={2}>
              0
            </Grid>
            <Grid item xs={2}  lg={2}>
              1
            </Grid>
            <Grid item xs={2} lg={2}>
              2
            </Grid>
            <Grid item xs={2} lg={2}>
              3
            </Grid>
            <Grid item xs={2} lg={2}>
             3+
            </Grid>
            <Grid item xs={2} lg={2}>
              Open Parking
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="0" control={<Radio />}  label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="1" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="2" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="3" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="3+" control={<Radio />} label="" />
            </Grid>
    
       </Grid>
      </RadioGroup>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={closedParking}
        onChange={handleChangeClosedParking}
      >
        <Grid container spacing={2}>
          
            <Grid item xs={2} lg={2}>
              Closed Parking
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="0" control={<Radio />}  label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="1" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="2" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="3" control={<Radio />} label="" />
            </Grid>
            <Grid item xs={2} lg={2}>
              <FormControlLabel value="3+" control={<Radio />} label="" />
            </Grid>
    
       </Grid>
      </RadioGroup>
    </FormControl>
  );
}