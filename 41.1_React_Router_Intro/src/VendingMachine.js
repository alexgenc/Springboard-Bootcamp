import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Vending Machine</h1>
      
      <BrowserRouter>
        <NavLink exact to ="/chips">Chips</NavLink>
        <NavLink exact to ="/soda">Soda</NavLink>
        <NavLink exact to ="/sardines">Sardines</NavLink>
        
        {/* Routes */}
        <Route exact path ="/chips">
          <Chips />
        </Route>
        <Route exact path ="/soda">
          <Soda />
        </Route>
        <Route exact path ="/Sardines">
          <Sardines />
        </Route>
  
      </BrowserRouter>
    </div>
  )
}

export default VendingMachine;