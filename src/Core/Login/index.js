import React from 'react';
import Loadable from 'react-loadable';
import { isMobile } from 'react-device-detect';

import Loading from 'App/Core/Loading';

const platform = isMobile ? 'mobile' : 'web';

function LoadingComponent(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <Loading />;
  } else {
    return <Loading />;
  }
}

export default Loadable({
  loader: () => import(/* webpackChunkName: "login-[request]" */`./${platform}`),
  loading: LoadingComponent,
  delay: 300,
});