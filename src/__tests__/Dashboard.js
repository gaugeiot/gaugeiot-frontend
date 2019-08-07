import 'regenerator-runtime'; // enable use of async/await in functions
import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { StateProvider, StateContext } from '../components/StateProvider/StateProvider';
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

afterEach(cleanup);

describe('Dashboard', () => {

  describe('Logout Button', () => {

    it('should render the Login page when Logout button is clicked ', async () => {
      let {queryByText , getByText} = render(
        <StateProvider initialState={getInitialState(true)}>
          <StateContext.Consumer>
            {([state,dispatch]) =>
            (state.user.isAuthenticated? <Dashboard/>:
            <LoginContainer/>)
            }
          </StateContext.Consumer>
        </StateProvider>
      );
      //simulates a click in the Logout Button
      fireEvent.click(getByText('Logout'));

      //waits for the Logout button to disappear
      const greetingTextNode = await waitForElement(() =>
      getByText('Sign In')
      );

      expect(queryByText('Logout')).not.toBeInTheDocument();
      //Login page was loaded so Sign In button must be in there
      expect(getByText('Sign In')).toBeInTheDocument();
    });

  });
});
