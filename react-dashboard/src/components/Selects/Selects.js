import React from "react";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Selects = ({title,value,onChange,name,MenuValue,MenuTitle}) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return (
    <div>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 425 }}>
      <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={value}
        onChange={onChange}
        label="Age"
        name={name}
      >
        <MenuItem value={MenuValue}>{MenuTitle}</MenuItem>
      </Select>
    </FormControl>
  </div>
  );
};
