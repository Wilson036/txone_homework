import { colorStyle, TonicProvider } from '@tonic-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TonicProvider
      colorMode={{ defaultValue: 'dark' }}
      colorStyle={{
        defaultValue: colorStyle,
      }}
      useCSSBaseline
    >
      <App />
    </TonicProvider>
  </React.StrictMode>
);
