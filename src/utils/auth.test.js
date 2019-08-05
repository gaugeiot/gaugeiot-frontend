import { getSessionStorageToken, verifyTokenValidation } from './auth';
import axios from 'axios';
import { async } from 'regenerator-runtime';

jest.mock('axios');

describe('Auth', () => {
  it('should return token saved in session storage', () => {
    sessionStorage.setItem('token', 'token');

    expect(getSessionStorageToken()).toBe('token');
  });

  it('should return false if there is no token in session storage', () => {
    sessionStorage.removeItem('token');

    expect(getSessionStorageToken()).toBe(false);
  });

  it('should validate token with server', async () => {
    const resp = { data: { verified: 'true' } };
    axios.get.mockResolvedValue(resp);

    expect(await verifyTokenValidation('token')).toBe(true);

    // expect(getSessionStorageToken()).toBe(false);
  });

  it('should not validate token with server', async () => {
    const resp = { data: { verified: 'false' } };
    axios.get.mockResolvedValue(resp);

    expect(await verifyTokenValidation('token')).toBe(false);
  });

  //TODO: implement test for "isSessionTokenValid"
});
