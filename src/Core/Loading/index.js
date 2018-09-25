import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './loading.scss';

export default class Loading extends React.Component {
  render() {
    return (
      <div id="loading" className="pos-fixed fixed-tl full-size">
        <div className="pos-absolute absolute-m">
          <FontAwesomeIcon icon="circle-notch" spin className="icon" size="2x"/>
        </div>
      </div>
    );
  }
}