import { createClient } from 'react-fetching-library';
import { RequestInterceptor } from 'react-fetching-library';
import axios from "axios";

// In real application this const will be stored in ENV's
export const HOST = 'http://localhost:4000';

/**
 * For react-fetching-library
 */

const requestHostInterceptor: (host: string) => RequestInterceptor = host => () => async action => {
  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
  };
};

export const Client = createClient({
  requestInterceptors: [requestHostInterceptor(HOST)],
});

/**
 * For http
 */


export const http = axios.create({
    baseURL: HOST,
    timeout: 2000,
    headers: { 'Content-Type': 'application/json' }
});