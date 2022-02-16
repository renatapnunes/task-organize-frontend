import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as pages from '../pages';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <pages.Home /> } />
      <Route element={ <pages.NotFound /> } />
    </Routes>
  );
}

export default MainRoutes;
