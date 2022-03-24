const userCredential = {
  user: {
    sendEmailVerification: jest.fn(),
  },
};

const errorObj = {
  code: 0,
  message: 'Failed',
};

export const getAuth = () => ({});
export const sendEmailVerification = jest.fn(() => Promise.resolve({}));
export const auth = jest.fn().mockReturnThis();
export const createUserWithEmailAndPassword = jest.fn(
  (auth, email, password) => new Promise((resolve, reject) => {
    if (email === 'pepe@pepe.com') {
      resolve(userCredential);
    } else {
      reject(errorObj);
    }
  }),
);
