
//import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import Two_player_app from './pages/2_Players/App.tsx';

import Index from './pages/Index.tsx';
import Error_Page from './pages/Error_Page/Error_Page.tsx';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
       <Route path='/' element={<Index />} errorElement={<Error_Page/>}/>
      <Route path='/single_mode' element={<App />} errorElement={<Error_Page/>} />
      <Route path='/two_players' element={<Two_player_app />} errorElement={<Error_Page/>} />

    </Routes>
  </HashRouter>
)
