import React, { createContext, useReducer } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

const AuthContext = createContext([[], () => {}]);

const loggedInReducer = (state, action) => {
  switch (action.type) {
    case 'isLoggingIn', 'isLoggingOut':
      return { token: state.token, loading: true, isLoggedIn: false }
    case 'isLoggedIn':
      return { token: action.token, loading: false, isLoggedIn: true }
    case 'isLoggedOut':
      return { token: null, loading: false, isLoggedIn: false }
  }
}

function AuthContextProvider(props) {
  const [admin, dispatch] = useReducer(loggedInReducer, { token: null, loading: false, isLoggedIn: false });
  const history = useHistory();

  // Setting up request listener to append auth token header for every request if admin isLoggedIn
  axios.interceptors.request.use(request => {
    isApiUrl = request.url.startsWith(process.env.SERVER_API_ENDPOINT);

    if (admin.isLoggedIn && isApiUrl) {
      request.headers.common.Authorization = `Bearer ${admin.token}`;
    }
  });

  // Setting up response listener to redirect to login page when token expires
  axios.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response.status === 401) {
      history.push('/admin/login');
    }
  });

  return (
    <AuthContext.Provider value={[admin, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }