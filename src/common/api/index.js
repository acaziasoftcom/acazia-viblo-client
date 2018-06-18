import qs from 'querystringify';

let SERVICE_ENDPOINT_REST_API_URL = 'https://api.viblo.asia';

const api = {
  post: (endpoint: string, params: Object) => {
    let options = {
      method: 'POST',
      body: JSON.stringify(params)
    };

    return fetch(SERVICE_ENDPOINT_REST_API_URL + endpoint, options).then(
      result => result.json()
    );
  },

  get: (endpoint: string, params: Object = {}) => {
    return fetch(
      SERVICE_ENDPOINT_REST_API_URL + endpoint + qs.stringify(params, true),
      {
        method: 'GET'
      }
    ).then(result => {
      return result.json();
    });
  },    

  put: (endpoint: string, params: Object) => {
    return fetch(SERVICE_ENDPOINT_REST_API_URL + endpoint, {
      method: 'PUT'
    }).then(result => result.json());
  },

  delete: (endpoint: string, params: Object) => {
    return fetch(
      SERVICE_ENDPOINT_REST_API_URL + endpoint + qs.stringify(params, true),
      {
        method: 'DELETE'
      }
    ).then(result => {
      return result.json();
    });
  }
};

export { api };
