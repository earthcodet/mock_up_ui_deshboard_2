import React, { Component } from 'react'
import MainNavBar from './MainNavBar'
import '../CSS/Profile.scss'
class Profile extends Component {
    render() {
        return (
            <div className='profile-app'>
                <MainNavBar />

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
                <div className="cols">
                    <div className='col is-7'>
                        <div className='profile-title-detail'>
                            <p>My account</p>
                            <button className='button-title color-dark-blue'> Setting</button>
                        </div>
                        <div className='profile-input-detail'>
                            <p className='heading-detail'>
                                user information
                            </p>
                            <div className='grop-input underline cols'>
                                <div className='col is-2'>
                                    <p className='subheading-detail'>Username</p>
                                    <input className='input-detail' placeholder='Username'></input>
                                </div>

                                <div className='col is-2'>
                                    <p className='subheading-detail' >Email address</p>
                                    <input className='input-detail' placeholder='jesse@example.com'></input>
                                </div>
                                <div className='col is-2'>
                                    <p className='subheading-detail' >First name</p>
                                    <input className='input-detail' placeholder='First name'></input>
                                </div>
                                <div className='col is-2'>
                                    <p className='subheading-detail' >Last name</p>
                                    <input className='input-detail' placeholder='Last name'></input>
                                </div>
                            </div>
                            <p className='heading-detail'>
                                contact information
                            </p>
                            <div className='grop-input underline cols'>
                                <div className='col is-1'>
                                    <p className='subheading-detail' >Address</p>
                                    <input className='input-detail' placeholder='Home Address'></input>
                                </div>
                                <div className='col is-3'>
                                    <p className='subheading-detail'> City</p>
                                    <input className='input-detail' placeholder='City'></input>
                                </div>
                                <div className='col is-3'>
                                    <p className='subheading-detail'> Country</p>
                                    <input className='input-detail' placeholder='Country'></input>
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
                                <textarea rows='4' cols='50' placeholder='A few words about you ...'>

                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div classNames='col'>
                        <div classNames='profile-title-detail'>
                            <button className='button-title color-green-blue'>Connect</button>
                            <div className='profile-image'>
                                <img classNames='image-profile'></img>
                            </div>
                            <button className='button-title color-black'>Message</button>

                        </div>
                        <div classNames='profile-card-detail'>
                            <div className='profile-status'>
                                <p>
                                    <span>
                                        22
                                </span>
                                    <span>
                                        Friends
                                </span>
                                </p>
                                <p>
                                    <span>
                                        10
                                </span>
                                    <span>
                                        Photos
                                </span>
                                </p>
                                <p>
                                    <span>
                                        89
                                </span>
                                    <span>
                                        Comments
                                </span>
                                </p>

                            </div>
                            <p className=''>
                               <span>Jessica jones</span> 
                               <span>,27</span>
                               <span>Bucharet, Romania</span>
                               <span>Solution Manager - Creative Tim Officer</span>
                               <span>University of Computer Science</span>
                               
                            </p>
                            <p>
                                <span>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy —</span>
                                <span>writes, performs and records all of his own music.</span>
                            </p>
                            <p>Show more</p>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Profile