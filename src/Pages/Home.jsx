import React from 'react'
import BannerHome from '../Components/Baner/BannerHome'
import Menu from '../Components/Baner/Menu/Menu'

const Home = () => {
    return (<div className="app">
        <Menu/>
        <div className="content">
            <BannerHome />
            {/* Aquí irá el contenido de la página */}
            
        </div>
    </div>)
}
export default Home

