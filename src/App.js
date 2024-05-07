import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Waa from './Components/Wa1/Waa';
import Wab from './Components/Wa2/Wab';
import Wac from './Components/Wa3/Wac';
import Wafr from './Components/Wafr/Wafr';

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
    },
    {
      path:'/round-2',
      element:<Wafr/>
    }
  ])
  return (
    <div className='flex items-center text-center' ><RouterProvider router={router}/>
    </div>
  );
}

export default App;
