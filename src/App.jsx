import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import NafNaf from './Pages/Brands/NafNaf.jsx'

function App() {
  let router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {path:"/nafnaf",element:<NafNaf/>}
  
  ])


  return (<RouterProvider router={router}>
    <Home />
  </RouterProvider>
  )

}


export default App
