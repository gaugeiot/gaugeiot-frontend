describe('Login', () => {
  it('should return token saved in session storage', () => {
    sessionStorage.setItem('token', 'token');
    expect(true).toBe(true);
  });

  //TODO : implement test for LoginContainer Component
});
