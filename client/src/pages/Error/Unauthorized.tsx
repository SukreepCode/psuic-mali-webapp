import React from "react";
import Error from "./Error";

import { LOGIN_PATH } from '../Routes';

const REDIRECT_COUNTDOWN = 2; // seconds

const Unauthorized = () => {

  return (

    <Error
      title="Unauthorized"
      heading="Unauthorized"
      subtitle={`You don't be allowed to access this page. 
      This page will be redirected to login page in ${REDIRECT_COUNTDOWN} seconds `}
      imageUrl="/images/undraw_safe_bnk7.svg"
      isRedirect={true}
      redirectCountdown={REDIRECT_COUNTDOWN}
      redirectPath={LOGIN_PATH}
    />

  );
};

export default Unauthorized;
