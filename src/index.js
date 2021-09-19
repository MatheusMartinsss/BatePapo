import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MensagensProvider from "./Context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <MensagensProvider>
      <App />
    </MensagensProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


