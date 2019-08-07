const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
          token: action.payload.token
        }
      };
    case 'LOGOUT':
      // remove token from session storage
      sessionStorage.removeItem('token');
      // update global state
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: false,
          token: ''
        }
      };
    default:
      return state;
  }
};

export default reducer;

