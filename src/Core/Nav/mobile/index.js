import React from 'react';
import './nav.scss';
import FilterSVG from 'Assets/icon_filter.svg';
import RecipesActive from 'Assets/recipes-active.svg';
import HatSVG from 'Assets/hat.svg';
import SaveSVG from 'Assets/save.svg';
import ChatSVG from 'Assets/chat.svg';

export default class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav id="main-nav" className="pos-fixed fixed-tl full-width d-flex flex-row p-2">
            <p className="m-0 mx-auto align-self-center nav-title">Recipes</p>
            <p className="m-0 align-self-center pos-absolute absolute-r v-center mr-2">
            <img src={FilterSVG} alt="" className="img-fluid"/>
            </p>
        </nav>
        <nav id="footer-nav" className="text-center pos-fixed fixed-tb full-width d-flex flex-row p-2 justify-content-around">
          <a href="" className="align-self-end">
            <img src={RecipesActive} alt=""/>
            <p className="m-0 text-secondary"><small>Recipes</small></p>
          </a>
          <a href="" className="align-self-end">
            <img src={HatSVG} alt=""/>
            <p className="m-0 text-secondary"><small>Chef</small></p>
          </a>
          <a href="" className="align-self-end">
            <img src={SaveSVG} alt=""/>
            <p className="m-0 text-secondary"><small>Saved</small></p>
          </a>
          <a href="" className="align-self-end">
            <img src={ChatSVG} alt=""/>
            <p className="m-0 text-secondary"><small>Chats</small></p>
          </a>
        </nav>
      </React.Fragment>
    );
  }
}