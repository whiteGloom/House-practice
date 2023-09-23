import React, {FC} from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <div />,
  },
]);

export const AppRouterProvider: FC = (props) => {
  return (
    <RouterProvider router={appRouter} />
  );
};