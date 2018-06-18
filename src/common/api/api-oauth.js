import { api } from './index';

export const apiOauth = {
  getApiKeys: () => api.get('/oauth/personal-access-tokens'),

  createApiKey: (name: string) =>
    api.post('/oauth/personal-access-tokens', { name }),

  revokeApiKey: (tokenId: string, password: string) =>
    api.post(`/oauth/tokens/${tokenId}/revoke`, { password })
};
