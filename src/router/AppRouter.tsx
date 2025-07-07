import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/Main/Main';
import { MainLayout } from '@/pages/MainLayout.tsx/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
    ],
  },
]);
