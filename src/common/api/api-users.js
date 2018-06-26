import { api } from './index';

export const apiUsers = {
  getProfile: (username: string, params?: object) =>
    api.get(`/users/${username}`, { params }),

  associatedResource: (username: string,type: string, params?: object) =>
    api.get(`/users/${username}/${type}`, { params })
};
