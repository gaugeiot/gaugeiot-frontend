import 'regenerator-runtime'; // enable use of async/await in functions
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestingRouter from '../../test-utils/TestingRouter';
import { StateProvider } from '../StateProvider/StateProvider';
import LoginContainer from './LoginContainer';

const getInitialState = (auth = false, token = '') => {
  return {
    user: {
      isAuthenticated: auth,
      token: token
    }
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'AuthenticateUser':
      return {
        ...state,
        user: {
          ...state.user,
          isAuthenticated: true,
          token: action.payload.token
        }
      };
    default:
      return state;
  }
};

afterEach(cleanup);

describe('LoginContainer', () => {
  it('should render Login component when user is not authenticated', () => {
    const { getByTestId } = render(
      <StateProvider initialState={getInitialState()} reducer={reducer}>
        <LoginContainer />
      </StateProvider>
    );
    expect(getByTestId('login-page')).toBeInTheDocument();
  });

  it('should redirect when the user is authenticated', () => {
    const redirectUrl = '/dashboard';

    const { container } = render(
      <StateProvider initialState={getInitialState(true, '')} reducer={reducer}>
        <TestingRouter
          ComponentWithRedirection={() => (
            <LoginContainer redirectTo={redirectUrl} />
          )}
          RedirectUrl={redirectUrl}
        />
      </StateProvider>
    );

    expect(container.innerHTML).toEqual(expect.stringContaining(redirectUrl));
  });
});
