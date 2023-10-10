import React, {FC} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HomePage} from '../../../pages/home';
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
]);

export const AppRouterProvider: FC = (props) => {
  return (
    <RouterProvider router={appRouter} />
  );
};