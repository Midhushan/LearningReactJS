import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const DistrictList = [
    {id: 1, name: "Kilinochchi", head:"KN"},
    {id: 2, name: "Jaffna", head:"JF"},
    {id: 3, name: "Mannar", head:"MN"},
    {id: 4, name: "Vuaniya", head:"VN"},
    {id: 5, name: "Mullaitheevu", head:"MV"},
    ];

ReactDOM.render(
    <App districts={DistrictList}/>,
    
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
