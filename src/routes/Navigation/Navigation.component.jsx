import React from 'react'
import {ReactComponent as SwagLogo} from '../../assets/crown.svg'
import {Link, Outlet} from 'react-router-dom'
import './Navigation.style.scss'
const Navigation = () => {
    return (
        <>
            <div className='navigation'>

                <Link to='/' className="logo-container">

                   <SwagLogo className='logo'/>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'> Shop </Link>
                    <Link className="nav-link" to='/signin'> Sign In </Link>
                </div>
            </div>
            <Outlet/>
        </>

    )
}


export  default Navigation