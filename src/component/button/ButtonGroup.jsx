import React, { useContext } from 'react';
import { AppContext } from '../store/store';
import ButtonReset from './ButtonReset';
import ButtonStart from './ButtonStart';

const ButtonGroup = () => {
  const { isFetch } = useContext(AppContext);
  return (
    <div className='button'>{isFetch ? <ButtonReset /> : <ButtonStart />}</div>
  );
};

export default ButtonGroup;
