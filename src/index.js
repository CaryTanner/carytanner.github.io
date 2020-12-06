import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from '@material-ui/styles';
import globalTheme from './Utils/Themes/globalTheme'
import CssBaseline from '@material-ui/core/CssBaseline';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


