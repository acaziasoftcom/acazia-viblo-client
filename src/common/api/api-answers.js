import { api } from './index';

export const apiAnswers = {
  get: (answer: string) => api.get(`/answers/${answer}`, {}),

  post: (question: string, values: object) =>
    api.post(`/questions/${question}/answers`, values),

  update: (hashId: string, values: object) =>
    api.put(`/answers/${hashId}`, values),

  delete: (hashId: string) => api.delete(`/answers/${hashId}`)
};
