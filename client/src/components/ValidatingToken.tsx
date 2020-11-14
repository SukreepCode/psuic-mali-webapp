import React, { useEffect, useState } from 'react';
import * as Auth from '../services/auth';
import { useSelector, useDispatch, connect } from "react-redux";
import { Link as RouterLink, withRouter } from 'react-router-dom';

import { LOGIN_PATH } from '../pages/Routes'
import store from "../app/store";

const dispatch = store.dispatch;

const ValidatingToken = (props: any) => {
  const { history } = props;
  const auth: Auth.AuthType = useSelector(Auth.selector);
  const dispatch = useDispatch();
  const [nextRoute, setNextRoute] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {

    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.has("next"));

    if (props.nextRoute) {
      setNextRoute(props.nextRoute);
      console.log(`Next route by props: ${props.nextRoute}`);
    } else if (searchParams.has("next")) {
      setNextRoute(searchParams.get("next") as string);
      console.log(`Next route by search params: ${searchParams.get("next")}`);
    } else if (props.location.state?.nextRoute) {
      setNextRoute(props.location.state.nextRoute);
    } else {
      history.push(LOGIN_PATH);
    }


    const checkAuth = async () => {
      await dispatch(Auth.checkAuthentication());
    }
   

    // const max = 100;

    // const runner = async () => {
    //   for (let i = 0; i < max; i++) {
    //     setCounter(counter + 1);
    //     console.log(`${counter}: --> ${auth.isAuthenticated}`)
    //     await sleep(200);
    //   }
    //   // history.push(LOGIN_PATH);
    // }
    checkAuth();
    // runner();

  }, []);

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    navigateToNextRoute();
  }, [auth]);

  const navigateToNextRoute = () => {
    if (auth.isAuthenticated && nextRoute !== "") {
      console.log(`Routing to ${nextRoute}`);
      history.push(nextRoute);
    } else if (auth.isAuthenticated === false) {
      history.push(LOGIN_PATH);
    }
    console.log(`ValidatingToken ${auth.isAuthenticated}`);
  }

  return (
    <div>
    </div>
  );
}

export default withRouter(ValidatingToken);