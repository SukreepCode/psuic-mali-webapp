import axios from 'axios';

import store from "../../app/store";
import * as AuthSlice from './auth.slice';
import { JWT_LOCAL_STORAGE_KEY, HTTP_HEADER_AUTHORIZATION_KEY } from './auth.constant';
import { isEmpty } from '../../common';
import Jwt, { DecodedJwtObject } from './jwt';

// -------------------------------------------
// Set Header for axios
// 

function setAuthHeaderToken(token: string): void {
  if (token)
    // Apply to every request
    axios.defaults.headers.common[HTTP_HEADER_AUTHORIZATION_KEY] = token;
  else
    // Delete auth header
    delete axios.defaults.headers.common[HTTP_HEADER_AUTHORIZATION_KEY];
};

/**
 * Set JWT token to Local Storage 
 * @param token JWT token from the request
 * @return Decoded data from JWT, (It should be the username)
 */

export function setJwtTokenLocalStorage(token: string | ""): DecodedJwtObject {
  if (isEmpty(token))
    localStorage.removeItem(JWT_LOCAL_STORAGE_KEY);
  else
    localStorage.setItem(JWT_LOCAL_STORAGE_KEY, token);

  // Set token to Auth header
  setAuthHeaderToken(token);

  // Decode token to get user data
  return new Jwt().decode(token);
};

// -------------------------------------------

export function checkAuthTokenExpired(): boolean {

  const tokenFromLocalStorage = localStorage[JWT_LOCAL_STORAGE_KEY];

  // Check for token
  if (tokenFromLocalStorage) {

    setAuthHeaderToken(tokenFromLocalStorage);
    try {
      const jwt = new Jwt();
      const decodedJwt = jwt.decode(tokenFromLocalStorage);

      // isAuthenticated will be changed on decoded data from JWT
      store.dispatch(AuthSlice.actions.setAuthUser({
        username: decodedJwt.username
      }));
      
      return !jwt.isExpire();

    } catch (e) {
      console.error("Invalid JWT Token");
    }
  }
  return false;
};