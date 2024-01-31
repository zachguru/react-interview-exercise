import React from 'react';
import './index.scss';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
