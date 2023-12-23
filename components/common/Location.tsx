'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Location(props:any) {
  const [location, setLocation] = React.useState(props.location);
    console.log(location, ": location");
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Location"
        required
        value={location}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setLocation(event.target.value);
        }}
      />
      {/* <TextField
        id="outlined-uncontrolled"
        label="Uncontrolled"
        defaultValue="foo"
      /> */}
    </Box>
  );
}