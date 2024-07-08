import { userRole } from './auth';

export interface UserListParams {
  page?: number;
}
export interface User {
  id: number;
  name: string;
  email: string;
  user_role: userRole;
  created_at: string;
}
export interface UserListResponse {
  status: boolean;
  message: string;
  data: {
    current_page: number;
    last_page: number;
    per_page: number;
    data: User[];
  };
}
export interface SaveUserParams {
  name: string;
  email: string;
  password: string;
}
export interface DeleteUserParams {
  user_id: number;
}
export interface UpdateUserParams {
  user_id: number;
  name: string;
  email: string;
  password: string;
}
export interface UserStateType {
  id: number;
  name: string;
  email: string;
  userRole: number;
  createdAt: string;
}
