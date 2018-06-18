import { api } from './index';

export const apiSearch = {
  search: (type: SearchType, params: Object) =>
    api.get(`/search/${type}`, { params }),

  multisearch: (searchQuery: string, params?: Object) =>
    api.get('/search/multi', {
      params: {
        q: searchQuery,
        ...params
      }
    })
};
