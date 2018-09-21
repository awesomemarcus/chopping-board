import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';
import '../../core.scss';
import Logo from 'Assets/logo.svg';
import FbLogo from 'Assets/fb-letter-logo.png';
import GoogleLogo from 'Assets/google-logo.png'

import(/* webpackPreload: true */'App/Core/Signup/mobile/signup.scss');
import(/* webpackPreload: true */'App/Core/Login/mobile/login.scss');

export default class Landing extends React.Component {
  render() {
    return (
      <div id="landing" className="pos-fixed fixed-tl full-size">
        <div className="d-flex flex-column py-2 px-3 h-100">
          <Link
            to="/login"
            className="ml-auto mb-auto">
            Sign in
          </Link>
          <div className="logo-wrapper text-center mx-3">
            <img src={Logo} alt="" className="mx-auto mb-3 img-fluid"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ducimus.</p>
          </div>
          <div id="login-options" className="d-flex flex-column text-center mt-auto px-3">
            <a href="" id="fb-signup" className="btn btn-social mx-auto mb-2 px-2 py-3">
              <img src={FbLogo} className="mr-2" alt=""/> Signup with facebook
            </a>
            <a href="" id="google-signup" className="btn btn-social mx-auto mb-3 px-2 py-3">
              <img src={GoogleLogo} className="mr-2" alt=""/> Signup with google
            </a>
            <a href="">Signup with Email</a>
          </div>
        </div>
      </div>
    );
  }
}