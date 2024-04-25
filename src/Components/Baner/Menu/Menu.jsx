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
        <li> <NavLink to='/americanbrands'>
          American Brands          
          </NavLink></li>
        <li> <NavLink to ='/rifle'>
          Rifle
          </NavLink></li>
          <li> <NavLink to ='mng'>
            MNG
          </NavLink>

          </li>
</ul>
    </div>
  );
}

export default Menu;
