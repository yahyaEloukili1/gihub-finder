import React, { Component } from 'react'
import PropTypes from 'prop-types'

 function Navbar(props) {
   

  
        return (
            <nav className="navbar bg-primary">
                <h1 ><i className={props.icon}></i> {props.title}</h1>
            </nav>
        )
    
}
 Navbar.defaultProps = {
    title : 'Github finder',
    icon: "fa fa-girhub"
}
 Navbar.propTypes = {
title : PropTypes.string.isRequired,
icon : PropTypes.string.isRequired
}
export default Navbar;