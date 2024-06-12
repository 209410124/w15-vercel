import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import LandingStatic_24 from './pages/open/pages/LandingStatic_24'
import  Landing_24  from './pages/open/pages/Landing_24';


import {
  Account_24,
  Bookings_24,
  Cabins_24,
  Dashboard_24,
  Login_24,
  PageNotFound_24,
  Settings_24,
  NewUsers_24,
  
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1 minutes
    },
  },
});

const router = createBrowserRouter([
  {
   path:'/landing',
   element:<Landing_24/> 
  }, 
  {
    path:'/',
    element:<LandingStatic_24/> 
   },
   {
    path:'/login',
    element:<Login_24/> 
   },
  {
    path: '/',
    element: <AppLayout />,
    children: [
  
      {
        path: 'dashboard',
        element: <Dashboard_24 />,
      },
      {
        path: 'bookings',
        element: <Bookings_24 />,
      },
      {
        path: 'bookings/:bookingId',
        element: <Bookings_24 />,
      },
      {
        path: 'cabins',
        element: <Cabins_24 />,
      },
      {
        path: 'users',
        element: <NewUsers_24 />,
      },
      {
        path: 'settings',
        element: <Settings_24 />,
      },
      {
        path: 'account',
        element: <Account_24 />,
      },
    ],
  },
]);

const App_24 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          styles: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-70)',
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App_24;
