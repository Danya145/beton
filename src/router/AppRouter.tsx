import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '@/pages/Main/Main';
import { MainLayout } from '@/pages/MainLayout.tsx/MainLayout';
import { PricePage } from '@/pages/Price/Price';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'price',
        element: <PricePage />,
      },
    ],
  },
]);
