import React, { Component } from 'react'
import '../CSS/MainFooter.scss'
class MainFooter extends Component {
    render() {
        return (
            <div className='home-footer'>
                <p className='left'>
                    <span>© 2020</span>
                    <a href='https://www.google.com'>Creative Tim</a>
                </p>
                <p className='right'>
                    <a>Creative Tim</a>
                    <a>About Us</a>
                    <a>Blog</a>
                    <a>MIT License</a>
                </p>
            </div>
        )
    }
}
export default MainFooter;