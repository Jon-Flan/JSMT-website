import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="logo"><img src={logo} alt="" style={{maxHeight:'85%', marginTop:'8%'}}/></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>JSMT -Sport Massage Therapy</h1>
                <p>The number one Sports Massage Therapy in Montreal, Canada. Don't worry, Jades got your back!</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('work')}}>Therapies</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('about')}}>Testimonials</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
