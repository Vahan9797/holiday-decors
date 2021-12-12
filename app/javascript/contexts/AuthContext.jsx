import React, { useEffect, useMemo, createContext, useReducer } from 'react';
import { SERVER_API_ENDPOINT } from '../constants/variables';
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

  // Setting up request listener to append auth token header for every request if admin isLoggedIn
  axios.interceptors.request.use(request => {
    isApiUrl = request.url.startsWith(SERVER_API_ENDPOINT(''));

    if (admin.isLoggedIn && isApiUrl) {
      request.headers.common.Authorization = `Bearer ${admin.token}`;
    }
  });

  // Setting up response listener to update auth token when it expires
  axios.interceptors.response(response => {
    return response;
  }, error => {
    if (error.response.status === 401) {
      // TODO: update token by making API call
    }
  });

  return (
    <AuthContext.Provider value={[admin, dispatch]}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }