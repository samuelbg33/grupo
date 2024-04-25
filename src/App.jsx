import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import NafNaf from './Pages/Brands/NafNaf.jsx'
import AmericanBrands from './Pages/Brands/AmericanBrands.jsx'
import Rifle from './Pages/Brands/Rifle.jsx'
import MNG from './Pages/Brands/MNG.jsx'
function App() {
  let router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {path:"/nafnaf",element:<NafNaf/>},
    {path:"//americanBrands",element:<AmericanBrands/>},
    {path:"///rifle",element:<Rifle/>},
    {path:"////mng",element:<MNG/>}
  
  ])


  return (<RouterProvider router={router}>
    <Home />
  </RouterProvider>
  )

}


export default App
