import React from 'react';
import { NavLink } from "react-router-dom"
function Menu() {
  return (
    <div className="menu">
      <ul>
        <li> Inicio</li>
        <li> <NavLink to='/nafnaf'>
            Naf Naf 
          </NavLink></li>
        <li> Configuración</li>
        <li> Acerca de</li>
</ul>
    </div>
  );
}

export default Menu;