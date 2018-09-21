import React from 'react';
import Loadable from 'react-loadable';
import { isMobile } from 'react-device-detect';

const platform = isMobile ? 'mobile' : 'web';

function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

export default Loadable({
    loader: () => import(/* webpackChunkName: "landing-[request]" */`./${platform}`),
    loading: Loading,
  });