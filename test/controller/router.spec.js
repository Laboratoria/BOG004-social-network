import { changeViews } from '../../src/controller/router';
import home from '../../src/lib/home';

jest.mock('../../src/lib/firebase-utils.js');

describe('changeViews function', () => {
  it('is a function', () => {
    expect(typeof changeViews).toBe('function');
  });
  it('is home page', () => {
    
    expect(changeViews('#/')).toBe(home);
  });
});
