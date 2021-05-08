import React from 'react';
import Classes from './Loader.css';

const spinner = () =>
{
  return (
    <div className={Classes.Loader}>Loading...</div>
  );    
};

export default spinner;