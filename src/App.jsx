import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todos from './Pages/Todos/Todos';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Todos />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
