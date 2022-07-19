import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from '../store/store';

const ButtonStart = () => {
  const { setIsFetch } = useContext(AppContext);
  return (
    <Button
      variant='contained'
      color='success'
      onClick={() => setIsFetch((prev) => !prev)}
    >
      Bắt đầu
    </Button>
  );
};

export default ButtonStart;
