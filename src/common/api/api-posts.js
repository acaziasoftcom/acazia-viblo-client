import { api } from './index';

export const apiPosts = {
  get: (feed: string, page) => api.get(`/posts/${feed}?page=${page}`, {}),

  getPost: (hashId: string) => api.get(`/posts/${hashId}`),

  deletePost: (hashId: string) => api.delete(`/posts/${hashId}`)
};
