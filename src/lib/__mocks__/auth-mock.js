export default jest.mock('../../view-controler/controllers', () => ({
  singUp: jest.fn((email) => Promise.resolve({ user: email })),
  emailSingUp: jest.fn((user) => ({ email: user.email })),
}));
