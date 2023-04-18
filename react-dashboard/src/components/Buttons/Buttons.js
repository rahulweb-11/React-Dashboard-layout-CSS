import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Buttons = ({title,type}) => {
  return (
    <Stack spacing={2} direction="row">
    <Button type={type} variant="contained">{title}</Button>
  </Stack>
  )
}
