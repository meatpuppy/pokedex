import React from 'react';
import './App.css';
import { StoreProvider } from './components/global/global';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Dashboard } from "./components/dashboard";


function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
