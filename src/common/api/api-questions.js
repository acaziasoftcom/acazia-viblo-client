import { api } from './index';

export const apiQuestions = {
  getQuestionsFeed: (feed: string, params?: Request) =>
    api.get('/questions', { params: { feed, ...params } }),

  getQuestion: (hashId: string) => api.get(`/questions/${hashId}`),

  getAnswers: (hashId: string, params: Request) =>
    api.get(`/questsions/${hashId}/answers`, { params }),

  acceptAnswer: (answer: string, value: boolean) =>
    api.put(`/answers/${answer}/accept`, { value }),

  postQuestion: (input: object) => api.post('/questions', input),

  getQuestionForEdit: (hashId: string) => api.get(`/questions/${hashId}/edit`),

  updateQuestion: (hashId: string, input: object) =>
    api.put(`/questions/${hashId}`, input),

  deleteQuestion: (hashId: string) => api.delete(`/questions/${hashId}`)
};
