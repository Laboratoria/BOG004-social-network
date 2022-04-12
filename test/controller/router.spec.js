import { changeViews } from '../../src/controller/router';

jest.mock('../../src/lib/firebase-utils.js');

describe('changeViews function', () => {
  it('is home page', () => {
    document.body.innerHTML = "<div id='container'></div>";
    changeViews('#/');
    expect(document.body.innerHTML).toContain('Welcome to PetShare');
  });
});
