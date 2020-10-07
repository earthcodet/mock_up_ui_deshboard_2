import React, { Component } from 'react'
import MainNavBar from './MainNavBar'
import '../CSS/Profile.scss'
import MainFooter from './MainFooter'
class Profile extends Component {
    render() {
        return (
            <div className='profile-app'>
                <MainNavBar header='user profile' />
                <div className='banner-box'>
                    <span className='effect-image'></span>
                    <div className='banner-profile'>
                        <p className='text'>
                            <span>Hello Jesse</span>
                            <span>This is your profile page. You can see the progress you've made with</span>
                            <span>your work and manage your projects or assigned tasks</span>
                        </p>
                        <button className='button'>
                            Edit profile
                    </button>
                    </div>

                </div>
                <div className="cols profile-informations">
                    <div className='col is-7 profile-card-box'>
                        <div className='profile-card'>
                            <div className='profile-title-detail'>
                                <p>My account</p>
                                <button className='button-title color-dark-blue'> Settings</button>
                            </div>
                            <div className='profile-input-detail'>
                                <p className='heading-detail'>
                                    user information
                            </p>
                                <div className='grop-input underline cols'>
                                    <div className='col is-2'>
                                        <p className='subheading-detail'>Username</p>
                                        <input className='input-detail' placeholder='Username' value='lucky.jesse'></input>
                                    </div>

                                    <div className='col is-2'>
                                        <p className='subheading-detail' >Email address</p>
                                        <input className='input-detail' placeholder='jesse@example.com'></input>
                                    </div>
                                    <div className='col is-2'>
                                        <p className='subheading-detail' >First name</p>
                                        <input className='input-detail' placeholder='First name' value='Lucky'></input>
                                    </div>
                                    <div className='col is-2'>
                                        <p className='subheading-detail' >Last name</p>
                                        <input className='input-detail' placeholder='Last name' value='Jesse'></input>
                                    </div>
                                </div>
                                <p className='heading-detail'>
                                    contact information
                            </p>
                                <div className='grop-input underline cols'>
                                    <div className='col is-1'>
                                        <p className='subheading-detail' >Address</p>
                                        <input className='input-detail' placeholder='Home Address' value='Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09'></input>
                                    </div>
                                    <div className='col is-3'>
                                        <p className='subheading-detail'> City</p>
                                        <input className='input-detail' placeholder='City' value='New York'></input>
                                    </div>
                                    <div className='col is-3'>
                                        <p className='subheading-detail'> Country</p>
                                        <input className='input-detail' placeholder='Country' value='United States'></input>
                                    </div>
                                    <div className='col is-3'>
                                        <p className='subheading-detail'> Postal code</p>
                                        <input type='number' className='input-detail' placeholder='Postal code'></input>
                                    </div>
                                </div>
                                <p className='heading-detail'>
                                    about me
                                </p>
                                <div className='grop-input'>
                                    <p className='subheading-detail'>About Me</p>
                                    <textarea rows='6' cols='50' placeholder='A few words about you ...' value='A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.'>
                                    </textarea>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col is-3 profile-card-box'>
                        <div className='profile-card'>
                            <div className='profile-title-detail'>
                                <button className='button-title color-green-blue'>Connect</button>
                                <div className='profile-image-box'>
                                    <img src='https://demos.creative-tim.com/nextjs-argon-dashboard/_next/static/images/team-4-800x800-230071328b705f8686cabd26a85ed6a5.jpg' className='profile-image'></img>
                                </div>
                                <button className='button-title color-black'>Message</button>

                            </div>
                            <div className='profile-card-detail'>
                                <div className='profile-status'>
                                    <p>
                                        <span>22</span>
                                        <span>Friends</span>
                                    </p>
                                    <p>
                                        <span>10</span>
                                        <span>Photos</span>
                                    </p>
                                    <p>
                                        <span>89 </span>
                                        <span>Comments</span>
                                    </p>

                                </div>
                                <p className='border-bottom'>
                                    <span>Jessica jones</span>
                                    <span>,27</span>
                                    <span>Bucharet, Romania</span>
                                    <span>Solution Manager - Creative Tim Officer</span>
                                    <span>University of Computer Science</span>

                                </p>
                                <p>
                                    <span>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</span>
                                </p>

                                <p className='show-more'>Show more</p>

                            </div>
                        </div>
                    </div>
                </div>
                <MainFooter />
            </div>
        )
    }
}
export default Profile