import { http } from '../config';
import { AxiosResponse } from 'axios';
import { UserRole } from '../user/user.type';


export type LoginParams = {
  username: string;
  password: string;
}

export type LoginReturn = {
  access_token: string
}

export function login(data: LoginParams): Promise<AxiosResponse<LoginReturn>> {
  return http.post<LoginReturn>('/auth/login', data);
}

export type checkTokenReturn = {
  status: boolean;
  username?: string;
  admin?: boolean;
  role?: UserRole;
}

export function checkToken(): Promise<AxiosResponse<checkTokenReturn>> {
  return http.get<any>('/auth/check');
}

