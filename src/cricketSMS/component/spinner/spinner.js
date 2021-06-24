import React from 'react';
import Classes from './spinner.css';

const spinner = () =>
{
  return (
    <div className={Classes.Loader}>Loading...</div>
  );    
};

export default spinner;