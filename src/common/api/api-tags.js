import { api } from './index';

export const apiComments = {
  getTags: (params?: Request) => api.get('tags', { params }),

  getTagInfo: tag => api.get(`/tags/${tag}`),

  associatedResource: (type: string, tag: string, params?: Request) =>
    api.get(`/tags/${tag}/${type}`, { params })
};
