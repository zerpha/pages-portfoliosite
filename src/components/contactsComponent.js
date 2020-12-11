import React from 'react';
import "../App.css";

import github from '../images/github.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';

class ContactsComponent extends React.Component{

    render(){
        return(
        <div className={'contacts-contents-container'} id="contacts">
            <div className={'contacts-footer-div'}></div>
            <div className={'contacts-social-container'}>
            <a href="mailto: henryhnguyen98@gmail.com" target="_blank"><img src={email} className={'contact-social-img2'}/></a>
                <a href="https://twitter.com/henryhnguyen98" target="_blank"><img src={twitter} className={'contact-social-img'}/></a>
                <a href="https://www.linkedin.com/in/henryhainguyen/" target="_blank"><img src={linkedin} className={'contact-social-img'}/></a>
                <a href="https://github.com/zerpha" target="_blank"><img src={github} className={'contact-social-img'}/></a>
            </div>
        </div>
        );
    }
}

export default ContactsComponent;

