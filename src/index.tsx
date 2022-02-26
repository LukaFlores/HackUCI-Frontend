import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import App from './App';

import './styles/main.css';
import './styles/tailwind.css';
import './i18n';

const firebaseConfig = {
  apiKey: "AIzaSyBV2k8rVe-ezcIUAsx2iUnI0G0vtkR9ztk",
  authDomain: "hackuci2022.firebaseapp.com",
  projectId: "hackuci2022",
  storageBucket: "hackuci2022.appspot.com",
  messagingSenderId: "564350752952",
  appId: "1:564350752952:web:e16af8915fbaa40164fc4d"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
