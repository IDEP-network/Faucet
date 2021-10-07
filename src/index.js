import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { FaucentContextProvider } from './utils/context';
import { theme } from './utils/theme';

ReactDOM.render(

    <ThemeProvider theme={theme}>
      <FaucentContextProvider>
        <App />
      </FaucentContextProvider>
    </ThemeProvider>,
  document.getElementById('root')
);
