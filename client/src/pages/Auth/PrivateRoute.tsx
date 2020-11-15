import React, { useEffect } from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
  useLocation,
} from "react-router-dom";
import { Link as RouterLink, withRouter } from 'react-router-dom';

// import store from "../app/store";
import { useSelector, useDispatch } from "react-redux";
import * as Auth from '../../services/auth';

import ValidatingToken from './ValidatingToken';
import { VALIDATING_TOKEN_PATH, LOGIN_PATH } from '../Routes';

// const dispatch = store.dispatch;

interface PropsType extends RouteProps {
  // loginPath: string;
  isAllowed?: boolean;
  restrictedPath?: string;
}

export const PrivateRoute: React.FC<PropsType> = props => {

  let location = useLocation();
  const auth: Auth.AuthType = useSelector(Auth.selector);

  const isAllowed = props.isAllowed ? props.isAllowed : true;
  const restrictedPath = props.restrictedPath ? props.restrictedPath : "/error";

  console.log(`PrivateRoute: ${auth.isAuthenticated}`);

  let redirectPath = '';
  if (!auth.isAuthenticated) {
    redirectPath = LOGIN_PATH;
  }
  if (auth.isAuthenticated && !isAllowed) {
    redirectPath = restrictedPath;
  }

  let renderComponent: any;
  let nextRoute: any;
  if (auth.isAuthenticated === undefined) {
    nextRoute = encodeURI(`${location.pathname}${location.search}`);
    console.log('next ' + nextRoute)
    renderComponent = () => <Redirect to={{ pathname: VALIDATING_TOKEN_PATH, search: `?next=${nextRoute}`, state: { nextRoute: nextRoute } }} />;
  } else {
    renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
  }

  if (redirectPath) {
    return (
      <>
        <Route {...props} component={renderComponent} render={undefined} />
      </>
    )
  } else {
    return <Route {...props} />;
  }
};
// withRouter(Login)

export default PrivateRoute;
