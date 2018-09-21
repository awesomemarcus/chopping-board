import React from 'react';
import Img1 from 'Assets/img1.svg';
import AvatarSVG from 'Assets/avatar.svg';
import './home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

export default class Home extends React.Component {
  render() {
    return (
      <div id="home" className="main-body py-2">
        <div className="form-group pos-relative">
          <FontAwesomeIcon icon="search" className="icon pos-absolute absolute-l v-center ml-2"/> 
          <input id="search" type="text" className="form-control pl-5" placeholder="Search..."/>
        </div>
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
        {this.renderRecipeItem()}
      </div>
    );
  }

  renderRecipeItem() {
    return (
      <div className="recipe-item mb-3">
        <div className="card">
          <img src={Img1} alt="" className="card-img-top"/>
          <div className="card-body d-flex flex-row p-2">
            <div className="meta-info">
              <h5 className="card-title">Chicken Cordon Bleu. <small>LVL 3</small></h5>
              <p className="card-text m-0 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nulla.</p>
              <p className="m-0">
                <small>
                  <FontAwesomeIcon icon="star" className="text-success"/>
                </small>
                <small>
                  <FontAwesomeIcon icon="star" className="text-success"/>
                </small>
                <small>
                  <FontAwesomeIcon icon="star" className="text-success"/>
                </small>
                <small>
                  <FontAwesomeIcon icon="star" className="text-success"/>
                </small>
                <small>
                  <FontAwesomeIcon icon={farStar} className="text-success"/>
                </small>
                <small>
                    (100)
                </small>
                <small> <FontAwesomeIcon icon="download" className="icon"/>(300)</small>
              </p>
            </div>
            <div className="meta-avatar text-right align-self-end">
              <img src={AvatarSVG} alt=""/>
              <p className="m-0 text-secondary"><small>by Chef Gordon</small></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}