'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Phone(props:any) {
  const [phone, setPhone] = React.useState(props.phone);
    console.log(phone, ": phone");
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
        label="Phone"
        required
        value={phone}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPhone(event.target.value);
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