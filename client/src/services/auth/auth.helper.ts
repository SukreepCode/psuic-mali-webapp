import { http } from '../config';
import { JWT_LOCAL_STORAGE_KEY, HTTP_HEADER_AUTHORIZATION_KEY } from './auth.constant';
import { isEmpty } from '../../common';
import Jwt, { DecodedJwtObject } from './jwt';

// -------------------------------------------
// Set Header for axios
// 

export function setAuthHeaderToken(token: string): void {
  if (token)
    // Apply to every request
    http.defaults.headers.common[HTTP_HEADER_AUTHORIZATION_KEY] = `bearer ${token}`;
  else
    // Delete auth header
    delete http.defaults.headers.common[HTTP_HEADER_AUTHORIZATION_KEY];
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
// 
