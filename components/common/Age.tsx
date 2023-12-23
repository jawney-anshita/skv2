'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';


export default function Age(props:any) {
  const [age, setAge] = React.useState(props.age);
    console.log(age, ": property age");
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
        label="Property Age"
        required
        value={age}
        InputProps={{
          endAdornment: <InputAdornment position="end">in Years</InputAdornment>,
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setAge(event.target.value);
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