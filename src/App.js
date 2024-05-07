import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Waa from './Components/Wa1/Waa';
import Wab from './Components/Wa2/Wab';
import Wac from './Components/Wa3/Wac';

function App() {
  const router = createBrowserRouter([
    {
      path:'/webpage1',
      element:<Waa/>
    },
    {
      path:'/webpage2',
      element:<Wab/>
    },
    {path:'/webpage3',
      element:<Wac/>
    }
  ])
  return (
    <div className='flex items-center text-center' >
      <h1 className='text-3xl m-auto text-sky-400 '>Webalchemy</h1>
    </div>
  );
}

export default App;
