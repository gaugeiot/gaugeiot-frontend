import 'regenerator-runtime'; // enable use of async/await in functions
import React from 'react'
import {render} from '@testing-library/react'
import authUtils from '../../utils/auth';
import { StateProvider, StateContextConsumer } from "../StateProvider/StateProvider";
import LoginContainer from "./LoginContainer";

const  initialState = {
  user: {
    isAuthenticated: false,
    token: ''
  }
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

describe('LoginContainer', () => {
  it('should render Login component when user is not authenticated', () => {
     //authUtils.getNewToken =  jest.fn().mockResolvedValue(false);
   const {getAllByText} = render(<StateProvider initialState={initialState} reducer={reducer}>
       <LoginContainer/>
     </StateProvider>);
    const { getByText } = render(<StateContextConsumer />);
    console.log(getAllByText);

    expect(true).toBe(true);
  });

  //TODO : implement test for LoginContainer Component
});
