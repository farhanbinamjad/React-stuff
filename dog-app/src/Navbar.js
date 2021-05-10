import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export class Navbar extends Component {

    render() {

        const linkDogs = this.props.dogs.map(dog =>(
            <li>
            <NavLink exact to={`/dogs/${dog.name}`} className='nav-link' key={dog.name}>
                {dog.name}
            </NavLink>
            </li>
        )
            )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" exact to="/dogs">
                    Dog App
                </Link>
                <button
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/dogs" className='nav-link'>Home</NavLink>
                           
                        </li>
                        {linkDogs}
                    </ul>
                    
                </div>
            </nav>
        )
    }
}

export default Navbar
