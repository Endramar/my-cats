import React from 'react';
import classes from './Backdrop.module.css';
import Loader from './loader/Loader';

function Backdrop (){
    return <div className={classes.backdrop}><Loader></Loader></div>
}

export default Backdrop;