import { api } from './index';

export const apiNotifications = {
  getNotificationSettings: params => api.get('/me/notifications', { params })
};
