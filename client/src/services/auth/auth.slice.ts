import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';

import * as AuthService from './auth.service';

import { isEmpty } from '../../common';
import { setJwtTokenLocalStorage, setAuthHeaderToken } from './auth.helper';
import Jwt from './jwt';
import { JWT_LOCAL_STORAGE_KEY } from './auth.constant';

/**
 * Auth Slice: Combine Actions & Reducers (Redux Toolkit)
 */

export type AuthType = {
  isAuthenticated: boolean | undefined;
  username?: string;
};

const initialState: AuthType = {
  isAuthenticated: undefined
};

/**
 * Step 1: Setup reducers (Pure functions)
 */

const reducers = {

  setAuthenticatedUser: (state: any, { payload }: PayloadAction<string>) => {
    console.log(` is isAuthenticated ${!isEmpty(payload)}`);
    state.isAuthenticated = !isEmpty(payload);
    state.username = payload;
  },

  // setError: (state: any, { payload }: PayloadAction<AuthType>) => {
  //   state.error = payload.error;
  // },

};



/**
 * Step 2: Create the slice instance
 */

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});


/**
 * Step 3: Setup Async actions
 */

// type LoginParams = {
//   username: string;
//   password: string;
// }

export function setAuthToken(token: string) {
  return (dispatch: AppDispatch) => {
    const decoded = setJwtTokenLocalStorage(token);
    console.log(`decoded ${JSON.stringify(decoded)}`);
    dispatch(actions.setAuthenticatedUser(decoded.username));
    // isAuthenticated should be true
  }
}


export function checkAuthentication() {
  return async (dispatch: AppDispatch) => {
    try {
      setAuthHeaderToken(localStorage[JWT_LOCAL_STORAGE_KEY]);
      const response = await AuthService.checkToken();
      console.log(response.data);
      if (response.data.username) {
        dispatch(actions.setAuthenticatedUser(response.data.username));
      }else {
        console.error("invalid token");
      }
      return status;
    } catch (err) {
      console.error(err);
    }
  }

}


export function logout() {
  return (dispatch: AppDispatch) => {
    setJwtTokenLocalStorage("");
    // Set current user to "" which will set isAuthenticated to false
    dispatch(actions.setAuthenticatedUser(""));
    // isAuthenticated should be false

  }
}


// export function checkAuthentication() {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const tokenFromLocalStorage = localStorage[JWT_LOCAL_STORAGE_KEY];
//       if (tokenFromLocalStorage) {
//         setAuthHeaderToken(tokenFromLocalStorage);
//         const response = await AuthService.checkToken();

//         dispatch(actions.setAuthUser({
//           username: response.data.username,
//           // isAuthenticated should be true
//         }));
//         return response.data.status;
//       }
//     } catch (err) {
//       console.error(err);
//     }
//     return false;
//   }
// }


/**
 * Set token to Auth header
 */

// export function setToken(token: string) {
//   return (dispatch: AppDispatch) => {
//     const decoded = setJwtTokenLocalStorage(token);
//     dispatch(actions.setAuthUser({
//       username: decoded
//     }));
//   }
// }

/**
 * Todo: Add type later
 */
// registerUser: (userData: any, history: any) => (dispatch: AppDispatch) => {
// axios   
//   .post('/api/users/register', userData)
//   .then(res => history.push('/login'))
//   .catch(err =>
//     dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data
//     })
//   );


/**
 * Step 4: For getting the state from the Redux store
 * Export actions & reducer for using async actions
 */
export const selector: any = (state: RootState) => state.auth;
export const actions = slice.actions;
export default slice.reducer;