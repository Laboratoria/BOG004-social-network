export default jest.mock('../../view-controler/controllers', () => ({
  singUp: jest.fn((email, password) => {
    console.log(password);
    return Promise.resolve({ user: { email } });
  }),
  emailSingUp: jest.fn((user) => ({ email: user.email })),
}));
