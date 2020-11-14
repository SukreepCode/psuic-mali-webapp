import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';
import { AppDispatch } from '../../app/store';

import * as AuthService from './auth.service';

import { isEmpty } from '../../common';
import { setJwtTokenLocalStorage } from './auth.helper';

/**
 * Auth Slice: Combine Actions & Reducers (Redux Toolkit)
 */

export type AuthType = {
  isAuthenticated?: boolean;
  username?: string;
};

const initialState: AuthType = {
  isAuthenticated: false
};

/**
 * Step 1: Setup reducers (Pure functions)
 */

const reducers = {

  setAuthUser: (state: any, { payload }: PayloadAction<AuthType>) => {
    console.log (` is isAuthenticated ${!isEmpty(payload.username)}`);
    state.isAuthenticated = !isEmpty(payload.username);
    state.username = payload.username;
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
    dispatch(actions.setAuthUser({
      username: decoded.username,
      // isAuthenticated should be true
    }));
  }
}

export function logout() {
  return (dispatch: AppDispatch) => {
    setJwtTokenLocalStorage("");
    // Set current user to "" which will set isAuthenticated to false
    dispatch(actions.setAuthUser({
      username: "",
      // isAuthenticated should be false
    }));
  }
}

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