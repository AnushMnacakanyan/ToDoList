import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { MyRouter } from './router/MyRouter';

function App() {
  return (
    <div>
      <MyRouter></MyRouter>
    </div>
  );
}

export default App;
