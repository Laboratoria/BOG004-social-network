import { login } from "../../src/lib/login";

jest.mock('../../src/Configfirebase/firebase-imports.js');

describe('login', ()=>{
    it('', ()=>{
       const result = login();
       const btn = result.querySelector('#btnlogin')
       btn.dispatchEvent(new Event('click'));
    })

    it('', ()=>{
        const result = login();
        const btn = result.querySelector('.logo-L')
        btn.dispatchEvent(new Event('click'));
     })
})
