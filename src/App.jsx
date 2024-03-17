import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/home';
import AirDrop from './pages/airdop/airdrop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/airdrop',
    element: <AirDrop />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
