const collection = jest.fn((db, collection) => {
  return {};
});

const getDocs = (collection) => { return Promise.resolve( docs: [],});

const getAuth = () => { return Promise.resolve({});};

const signInWithEmailAndPassword = () => {
  return Promise.resolve({});
};

const signInWithPopup = () => {
  return Promise.resolve({});
};

const createUserWithEmailAndPassword = () => {
  return Promise.resolve({});
};

const signInWithRedirect = () => {
  return Promise.resolve({});
};

const GoogleAuthProvider = () => {
  return Promise.resolve({});
};

export {
  collection,
  getDocs,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
};
