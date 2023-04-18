import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Inputs = ({label,name,value,onChange}) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField name={name} value={value} onChange={onChange} id="standard-basic" label={label} variant="standard" />
      </Box>
    </>
  );
};
