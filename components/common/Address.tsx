'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Address(props:any) {
  const [address, setAddress] = React.useState(props.address);
    console.log(address, ": address");
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
        label="Address"
        required
        value={address}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setAddress(event.target.value);
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