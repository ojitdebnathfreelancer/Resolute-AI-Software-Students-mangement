import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Router';

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
