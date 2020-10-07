import React, { Component } from 'react'
// Css
import '../CSS/SideBar.scss'
import { NavLink, withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import $ from 'jquery'
class MainSideBar extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    state = {};
    getNavLinkClass = path => {
        
        return this.props.location.pathname === path
            ? "active"
            : "";
    }
    onClickBarMenu = () => {
        console.log('dasd')
        $('.sidebar-content').toggleClass('showbar')
    }
    render() {
        return (
            <aside className='sidebar-content'>
                <div className='sidebar-heading'>
                    <img className='sidebar-logo-size' src='https://demos.creative-tim.com/nextjs-argon-dashboard/_next/static/images/nextjs_argon_black-00653defbe44f7b5ed0e3926ec44f265.png'></img>
                    <i className='close-model-sidebar las la-times' onClick={() => this.onClickBarMenu()}></i>
                </div>
                <div className='sidebar-search-mobile' >
                        <input type='text'  placeholder='Search'>
                          
                        </input>
                        <button className='fa fa-search'>

                        </button>
                </div>
                <div className='sidebar-body'>
                    {/* Logo and Search ( mobile )*/}
                    <div className='sidebar-row-1'>
                        <ul className='sidebar-menu box'>
                            <li className={this.getNavLinkClass("/")} onClick=''>
                                <NavLink exact to='/' >
                                    <a>
                                        <i className='las la-desktop color-blue'></i>
                                Dashboard
                                </a>
                                </NavLink>
                            </li>
                            <li>
                                <a>
                                    <i className='las la-globe color-lightblue'></i>
                                Icons
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className='las la-map-marker-alt color-orange'></i>
                                    Maps
                                </a>
                            </li>
                            <li className={this.getNavLinkClass("/profile")}>
                                <NavLink to='/profile' >
                                    <a>
                                        <i className='las la-user color-yellow'></i>
                                    User Profile
                                </a>
                                </NavLink>
                            </li>
                            <li>
                                <a>
                                    <i className='las la-list color-red'></i>
                                Tables
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className='las la-key color-greenblue'></i>
                                Login
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className='las la-user-circle color-pink'></i>
                                Register
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='sidebar-row-2'>
                        <h6 class='sidebar-text-hedding'>DOCUMENTATION</h6>
                        <ul className='sidebar-menu'>
                            <li >
                                <a>
                                    <i className='las la-rocket color-blue'></i>
                                    Getting started
                                </a>
                            </li>
                            <li >
                                <a>
                                    <i className='las la-palette color-yellow'></i>
                                    Foundation
                                </a>
                            </li>
                            <li >
                                <a>
                                    <i className='las la-toggle-off color-greenblue'></i>
                                    Components
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='sidebar-row-3'>
                        <ul className='sidebar-menu'>
                            <li >
                                <a>
                                    <i className='las la-rocket color-blue'></i>
                                    Upgrade to PRO
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        )
    }
}
export default withRouter(MainSideBar)
