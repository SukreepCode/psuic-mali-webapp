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

// import ValidatingToken from './ValidatingToken';
import { VALIDATING_TOKEN_PATH, LOGIN_PATH, UNAUTHORIZED } from '../Routes';

// const dispatch = store.dispatch;

interface PropsType extends RouteProps {
  unauthorizedPath?: string;
  roles?: string[]
  isAllowed?: boolean;
  restrictedPath?: string;
}

export const PrivateRoute: React.FC<PropsType> = props => {
 
  let location = useLocation();
  const auth: Auth.AuthType = useSelector(Auth.selector);

  const allowedRoles = props.roles ? props.roles : [];
  const isAllowed = props.isAllowed ? props.isAllowed : true;
  const restrictedPath = props.restrictedPath ? props.restrictedPath : "/error";
  const unauthorizedPath = props.unauthorizedPath ? props.unauthorizedPath : UNAUTHORIZED;

  let redirectPath = '';
  if (!auth.isAuthenticated) {
    redirectPath = unauthorizedPath;
  }
  if (auth.isAuthenticated && !isAllowed) {
    redirectPath = restrictedPath;
  }

  let renderComponent: any;
  /**
   * Auth didn't verify yet
   */

  if (auth.isAuthenticated === undefined) {
    renderComponent = () => <Route {...props} component={ValidatingToken} render={undefined} />
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

export default PrivateRoute;

const ValidatingToken = (props: any) => {
  const dispatch = useDispatch();

  useEffect(() => {

    const checkAuth = async () => {
      await dispatch(Auth.checkAuthentication());
    }
    checkAuth();

  }, []);

  return ( <> </> );
};
