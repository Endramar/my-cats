import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigationitems.module.css';

function NavigationItems(){
    return <ul className={classes.NavigationItems}>
      <NavLink to="/" exact className={classes.NavigationItem} activeClassName={classes.Active}>Catlist</NavLink>
      <NavLink to="/upload" className={classes.NavigationItem} activeClassName={classes.Active}>Catload</NavLink>
    </ul>
}

export default NavigationItems;