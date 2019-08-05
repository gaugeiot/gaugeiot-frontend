import 'regenerator-runtime'; // enable use of async/await in functions
import authUtils from './auth';
import axios from 'axios';

jest.mock('axios');

describe('Auth', () => {
  it('should return token saved in session storage', () => {
    sessionStorage.setItem('token', 'token');
    expect(authUtils.getSessionStorageToken()).toBe('token');
  });

  it('should return false if there is no token in session storage', () => {
    sessionStorage.removeItem('token');

    expect(authUtils.getSessionStorageToken()).toBe(false);
  });

  it('should validate token with server', async () => {
    const resp = { data: { verified: 'true' } };
    axios.get.mockResolvedValue(resp);

    expect(await authUtils.verifyTokenValidation('token')).toBe(true);
  });

  it('should not validate token with server', async () => {
    const resp = { data: { verified: 'false' } };
    axios.get.mockResolvedValue(resp);

    expect(await authUtils.verifyTokenValidation('token')).toBe(false);
  });

  it('should not validate session toke if there is no token saved in session storage', async () => {
    authUtils.getSessionStorageToken =  jest.fn().mockReturnValue(false);
    expect(await authUtils.isSessionTokenValid()).toBe(false);
  });

  it('should not validate session token if it is not authenticated by the server', async () => {
    authUtils.getSessionStorageToken =  jest.fn().mockReturnValue(true);
    authUtils.verifyTokenValidation = jest.fn().mockResolvedValue(false);
    expect(await authUtils.isSessionTokenValid()).toBe(false);
  });

  it('should validate session token if it exist in session storage and was authenticated by the server', async () => {
    authUtils.getSessionStorageToken =  jest.fn().mockReturnValue(true);
    authUtils.verifyTokenValidation =  jest.fn().mockResolvedValue(true);
    expect(await authUtils.isSessionTokenValid()).toBe(true);
  });

  //TODO: test authUtils.getNewToken

  
});
