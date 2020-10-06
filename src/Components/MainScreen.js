import React, { Component } from 'react'
import '../CSS/MainScreen.scss'
import '../CSS/Page.scss'
import '../../node_modules/line-awesome/dist/line-awesome/css/line-awesome.min.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
//Componet
import {
    Route, Redirect, Switch
} from 'react-router-dom'

import SideBar from './MainSideBar'
import HomePage from './HomePage'
import Profile from './Profile'
class MainScreen extends Component {
    render() {
        return (
            <div className='app-main'>
                <SideBar />
                <div className='app-body'>
                    {/* default */}
                    <Route exact path="/" render={(props) =>
                        <HomePage />
                    } />

                    <Route path="/profile" render={(props) =>
                        <Profile />
                    } />
                </div>

            </div>
        )
    }
}
export default MainScreen
