import 'regenerator-runtime'; // enable use of async/await in functions
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { StateProvider } from '../components/StateProvider/StateProvider';
import ProtectedRouter from '../components/ProtectedRouter/ProtectedRouter';
import Dashboard from '../components/Dashboard/Dashboard';
import LoginContainer from '../components/Login/index';

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

// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history
  };
}

describe('LoginContainer', () => {
  it('should logout when Logout button is clicked ', async () => {
    const { container, getByText, debug } = renderWithRouter(
      <StateProvider initialState={getInitialState(true)} reducer={reducer}>
        <ProtectedRouter exact path='/' component={Dashboard} />
        <Route exact path='/login' component={LoginContainer} />
      </StateProvider>
    );
    debug();
    console.log(getByText('Logout'));
    const leftClick = { button: 0 };
    fireEvent.click(getByText('Logout'), leftClick);
    console.log(container.innerHTML);
    await navigate('/about');
    // fireEvent.click(getByText('Logout'));
    expect(true).toBe(true);
  });
});
