import { home } from '../../src/lib/home.js';

jest.mock('../../src/Configfirebase/firebase-imports.js');

describe('home', () => {
  it('', () => {
    const result = home();
    const btn = result.querySelector('#register1');
    btn.dispatchEvent(new Event('click'));
  });

  it(' ', () => {
    const result = home();
    const btn = result.querySelector('#login1');
    btn.dispatchEvent(new Event('click'));
  });
});
