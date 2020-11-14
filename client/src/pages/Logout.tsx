import React, { useState, useEffect } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import * as Auth from '../services/auth';

import { VALIDATING_TOKEN_PATH } from './Routes';

const Logout = (props: any) => {
  const { history } = props;
  // Redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Auth.logout());
    // history.push(VALIDATING_TOKEN_PATH);
  }, []);

  return (
    <>
    </>
  );
};

export default withRouter(Logout);

