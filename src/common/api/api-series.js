import { api } from './index';

export const apiSeries = {
  getSeriesFeed: (params?: Request) => api.get('/series', { params }),

  getSeries: (hashId: string) => api.get(`/series/${hashId}`),

  createSeries: (values: object) => api.post('/series', values),

  edit: (hashId: string) => api.get(`/series/${hashId}/edit`),

  updateSeries: (hashId: string, values: object) =>
    api.put(`/series/${hashId}`, values),

  deleteSeries: (hashId: string) => api.delete(`/series/${hashId}`),

  getPosts: (hashId: string, params?: Request) =>
    api.get(`/series/${hashId}/posts`),

  addPost: (postId: string, series: string) =>
    api.put(`/series/${series}/addPost`, { post_id: postId }),

  removePost: (postId: string, series: string) =>
    api.put(`/series/${series}/removePost`, { post_id: postId }),

  movePostBefore: (nextPostId: string, postId: string, series: string) =>
    api.put(`/series/${series}/movePostBefore`, {
      next_post_id: nextPostId,
      post_id: postId
    })
};
