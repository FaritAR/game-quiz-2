import { Button } from '@mui/material';
import React from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Navigation(): JSX.Element {
  return (
    <div>
      <Button variant="contained">
        <Link to="/">Домой</Link>
      </Button>
      <Button variant="contained">
        <Link to="/cocktails">Коктейли</Link>
      </Button>
      <Button variant="contained">
        <Link to="/info">Инфо</Link>
      </Button>
      <Button variant="contained">
        <Link to="/login">Логин</Link>
      </Button>
    </div>
  );
}

export default Navigation;
