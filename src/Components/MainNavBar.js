import React, { Component } from 'react'
//css
import '../CSS/Navbar.scss'
import {
    Link
} from 'react-router-dom'
class MainNavBar extends Component {
    render() {
        return (
            <nav className='headdingPage'>
                <div className='contentNav'>
                    <Link to='/' class='link-home-page'>
                        <a className='nav-heading'>DASHBOARD</a>
                    </Link>
                    <div className='box-icons-search'>
                        <i className='las la-search icon-search'></i>
                        <input type='text' className='input-search' placeholder='Search'></input>
                    </div>
                    <div className='box-profile'>
                        <div className='profile-box-image'>
                            <img className='full-w-h' src='https://demos.creative-tim.com/nextjs-argon-dashboard/_next/static/images/team-4-800x800-230071328b705f8686cabd26a85ed6a5.jpg'></img>
                        </div>
                        <a className='box-profile-name'> Jessica Jones</a>
                    </div>
                </div>
            </nav>
        )
    }
}
export default MainNavBar