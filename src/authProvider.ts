export const authProvider = {
  login: async ({ username, password }: { username: string; password: string; }) => {
    const { access_token } = await (await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })).json();

    localStorage.setItem('access_token', access_token);

    return true;
  },
 logout: () => {
    localStorage.removeItem('access_token');

    return Promise.resolve();
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('access_token');

      return Promise.reject();
    }

    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('access_token')
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};
