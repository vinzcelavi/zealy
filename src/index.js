import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MouseContextProvider from './context/mouse-context';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </StrictMode>
);
