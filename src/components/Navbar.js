import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
    static defaultProps = {
            title : 'Github finder',
            icon: "fa fa-girhub"
    }
    static propTypes = {
        title : PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired
    }
    constructor(props){
            super(props)
    }
    render() {
        return (
            <navb className="navbar bg-primary">
                <h1 ><i className={this.props.icon}></i> {this.props.title}</h1>
            </navb>
        )
    }
}
