'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ClientName(props:any) {
  const [name, setName] = React.useState(props.client);
    console.log(name, ": name");
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
        label="Full Name"
        required
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
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