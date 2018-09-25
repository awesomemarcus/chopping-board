import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.scss';
import '../../core.scss';
import Logo from 'Assets/logo.svg';
import FbLogo from 'Assets/fb-letter-logo.png';
import GoogleLogo from 'Assets/google-logo.png';
import { FixedContainer, Input } from '../../CoreStyles';

export default class Login extends React.Component {
  render() {
    return (
      <FixedContainer top left h="100%" w="100%" scrollY>
        <div className="wrapper d-flex flex-column py-2 px-3 h-100">
          <div id="header" className="min-height mb-auto d-flex flex-row">
            <a onClick={e => { e.preventDefault(); this.props.history.goBack()}} href="">
              <FontAwesomeIcon icon="arrow-left" className="mr-auto fa-2x align-self-center"/>
            </a>
            <p className="ml-auto mb-0 align-self-center">Not yet a member? <Link to="/signup">Sign up now!</Link></p>
          </div>
          <div className="logo-wrapper text-center m-3 min-height">
            <img src={Logo} alt="" className="mx-auto mb-4 img-fluid"/>
            <h4 className="sub-title">Welcome back chef!</h4>
          </div>
          <div id="login-options" className="min-height d-flex flex-column mt-auto px-3">
            <form action="" className="d-flex flex-column">
              <div className="form-group mb-1">
                <label className="mx-0 mb-1" htmlFor="">Email</label>
                <Input type="email" className="form-control"/>
              </div>
              <div className="form-group mb-4">
                <label className="mx-0 mb-1" htmlFor="">Password</label>
                <Input type="password" className="form-control"/>
              </div>
              <a href="" id="btn-login" className="btn btn-mobile px-2 py-3 mx-auto mb-3"><strong>LOG IN</strong></a>
            </form>
            <div className="d-flex flex-row mb-3">
              <hr className="my-0 mx-3 w-100 align-self-center"/>
              <p className="m-0"><strong>OR</strong></p>
              <hr className="my-0 mx-3 w-100 align-self-center"/>
            </div>
            <a href="" id="fb-signup" className="btn btn-social mx-auto mb-2 px-2 py-3">
              <img src={FbLogo} className="mr-2" alt=""/> Login with facebook
            </a>
            <a href="" id="google-signup" className="btn btn-social mx-auto mb-3 px-2 py-3">
              <img src={GoogleLogo} className="mr-2" alt=""/> Login with google
            </a>
          </div>
        </div>
      </FixedContainer>
    );
  }
}