import './index.module.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/router/AppRouter';
import { AlertProvider } from '@/ui/Alert/AlertContext';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <AlertProvider>
      <App>
        <RouterProvider router={router} />
      </App>
    </AlertProvider>
  </React.StrictMode>,
);
