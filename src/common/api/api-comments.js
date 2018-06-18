import { api } from './index';

export const apiComments = {
  get: (commentableType: string, hashId: string) =>
    api.get(`/${commentableType}/${hashId}/comments`),

  post: (commentableType: string, hashId: string, input: Object) =>
    api.post(`/${commentableType}/${hashId}/comments`, input),

  update: (hashId: string, comment_contents) =>
    api.put(`/comments/${hashId}`, { comment_contents: comment_contents }),

  delete: (hashId: string) => api.delete(`/comments/${hashId}`)
};
