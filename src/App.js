import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';

import Home  from './Home'

export default function App() {
  const [darkMode, setDarkMode] =  useState(false);

  const theme = createMuiTheme({
    palette:{
      type: darkMode ? 'dark' : 'light',
      primary:{
        main: '#f44336',
      },
      secondary:{
        main: '#3EA6FF'
      },
      background:{
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  )
}