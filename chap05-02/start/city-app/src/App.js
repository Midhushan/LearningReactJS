import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({districts}) => (
  <ul>
     {districts.map(district => 
         <li key={district.id}>{district.name} | {district.head}</li>
     )}
  </ul>
);

export default App;
