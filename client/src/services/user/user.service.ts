import { http } from '../config';
import { AxiosResponse } from 'axios';
import { UserRole } from '../user/user.type';

export interface User {
  id: number,
  displayID: string,
  name: string,
  username: string,
  role: string,
}

export type LoginParams = {
  username: string;
  password: string;
}

export type LoginReturn = {
  access_token: string
}

export function updateTable(data: User[]): Promise<AxiosResponse<any>> {
  return http.put<any>('/users/table', data);
}
