import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/rootReducer';
import { AppDispatch, AppThunk } from '../../app/store';

import * as AuthService from './auth.service';

import { isEmpty } from '../../common';
import { setJwtTokenLocalStorage, setAuthHeaderToken } from './auth.helper';
import Jwt from './jwt';
import { JWT_LOCAL_STORAGE_KEY } from './auth.constant';

import { UserRole } from '../user/user.type';

/**
 * Auth Slice: Combine Actions & Reducers (Redux Toolkit)
 */

export type AuthType = {
  isAuthenticated?: boolean;
  role?: UserRole;
  username?: string;
  error?: string;
  errorMessage?: string;
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

  setRole: (state: any, { payload }: PayloadAction<UserRole>) => {
    state.role = payload;
  },

  setError: (state: any, { payload }: PayloadAction<AuthType>) => {
    state.error = payload.error;
    state.errorMessage = payload.errorMessage;
  },

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
    // console.log(`decoded ${JSON.stringify(decoded)}`);
    dispatch(actions.setAuthenticatedUser(decoded.username));
    // isAuthenticated should be true
  }
}


export function checkAuthentication() : AppThunk{
  return async (dispatch: AppDispatch) => {
    try {
      setAuthHeaderToken(localStorage[JWT_LOCAL_STORAGE_KEY]);
      const response = await AuthService.checkToken();
      const { username , role } = response.data;
      
      if (username) {
        dispatch(actions.setAuthenticatedUser(username));
        
        // check role
        if(role) dispatch(actions.setRole(role));
      }else {
        console.error("invalid token");
        dispatch(actions.setAuthenticatedUser(""));
      }
      return status;
    } catch (err) {

      if(err.message == "Network Error"){
        dispatch(actions.setError({
          error: "Can't connect to the server",
          errorMessage: err.message
        }));
      }else {
        dispatch(actions.setError({
          error: err.message,
          errorMessage: err.stack
        }));
      }
      console.error(JSON.stringify(err));
      dispatch(actions.setAuthenticatedUser(""));
    }
  }

}


export function logout() {
  return (dispatch: AppDispatch) => {
    try {
    setJwtTokenLocalStorage("");
    // Set current user to "" which will set isAuthenticated to false
    // isAuthenticated should be false
    } catch(err){
      console.log('Invalid Token: Logout success');
      dispatch(actions.setAuthenticatedUser(""));
      window.location.href = '/login'
    }
  }
}


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