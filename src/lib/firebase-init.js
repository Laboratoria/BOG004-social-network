/* eslint-disable import/no-unresolved */
import { initializeApp } from '../lib/firebase-utils.js';
import { getFirestore } from '../lib/firebase-utils.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCD3vDNvAc4fuPUfuqxSUlLO1oPpe8UQGg',
  authDomain: 'nibbles-sn4.firebaseapp.com',
  projectId: 'nibbles-sn4',
  storageBucket: 'nibbles-sn4.appspot.com',
  messagingSenderId: '103067776601',
  appId: '1:103067776601:web:a0593480ba20b6d76ae348',
  measurementId: 'G-SST87CF4S1',
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
