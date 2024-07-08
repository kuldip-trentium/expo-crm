import {
  DeleteUserParams,
  SaveUserParams,
  UpdateUserParams,
  UserListParams,
  UserListResponse,
} from '@type/api/user';
import { api } from './api';
import { AxiosPromise } from 'axios';
import { ApiResponse } from '@type/api/api';
export const userList = (
  body: UserListParams,
): AxiosPromise<UserListResponse> =>
  api.get(`/company-user-list`, { params: body });

export const saveUser = (body: SaveUserParams): AxiosPromise<ApiResponse> =>
  api.post(`/save-company-user`, body);

export const deleteUser = (
  body: DeleteUserParams,
): AxiosPromise<ApiResponse> => {
  return api.post('/delete-company-user', body);
};

export const updateUser = (
  body: UpdateUserParams,
): AxiosPromise<ApiResponse> => {
  return api.post('/update-company-user', body);
};
