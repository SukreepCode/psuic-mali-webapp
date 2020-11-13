import { Action } from "react-fetching-library";
import { http } from './config';

// export type ReturnLogin = {};

// export const login: Action<any> = { method: "POST", endpoint: "/auth/login" };
// 
export type LoginParams = {
    username: string;
    password: string;
}
 
export const login = (data: LoginParams) => (
    http.post<any>('/auth/login', data)
)