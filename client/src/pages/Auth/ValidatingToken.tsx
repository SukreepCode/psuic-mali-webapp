import React, { useEffect, useState } from 'react';
import * as Auth from '../../services/auth';
import { useSelector, useDispatch, connect } from "react-redux";
import { Link as RouterLink, withRouter } from 'react-router-dom';

import { LOGIN_PATH, PERMISSION_DENIED, UNAUTHORIZED } from '../Routes'
import store from "../../app/store";

const dispatch = store.dispatch;

const ValidatingToken = (props: any) => {
  const { history } = props;
  const auth: Auth.AuthType = useSelector(Auth.selector);
  const dispatch = useDispatch();
  const [nextRoute, setNextRoute] = useState("");

  useEffect(() => {

    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.has("next"));

    if (props.nextRoute) {
      setNextRoute(props.nextRoute);
      console.log(`Next route by props: ${props.nextRoute}`);

    } else if (props.location.state?.nextRoute) {
      console.log(`Role: ${props.location.state?.allowedRoles}`);
      setNextRoute(props.location.state.nextRoute);
      console.log(`Next route by location.state: ${props.location.state.nextRoute}`);

    } else if (searchParams.has("next")) {
      setNextRoute(searchParams.get("next") as string);
      console.log(`Next route by search params: ${searchParams.get("next")}`);

    } else {
      history.push(LOGIN_PATH);
    }


    const checkAuth = async () => {
      await dispatch(Auth.checkAuthentication());
    }

    checkAuth();

  }, []);


  useEffect(() => {
    navigateToNextRoute();
  }, [auth]);

  const navigateToNextRoute = () => {
    if (auth.isAuthenticated && nextRoute !== "") {
      console.log(`Routing to ${nextRoute}`);
      history.push(nextRoute);
    } else if (auth.isAuthenticated === false) {
      history.push(UNAUTHORIZED);
    }
    console.log(`ValidatingToken ${auth.isAuthenticated}`);
  }

  // const navigateToNextRoute = () => {
  //   const allowedRole = props.location.state?.nextRoute || [];
  //   if( allowedRole.length === 0) return navigateToNextRouteWithAuthen();

  //   if (nextRoute !== "") {

  //     // checking role
  //     if(auth.isAuthenticated && auth.role) {
  //       if(allowedRole.include(auth.role)){

  //       }
  //     }
      

  //   } else if (auth.isAuthenticated === false) {
  //     history.push(UNAUTHORIZED);
  //   }
  //   console.log(`ValidatingToken ${auth.isAuthenticated}`);
  // }


  return (
    <div>
    </div>
  );
}

export default withRouter(ValidatingToken);