// // importamos la funcion que vamos a testear

import Router from '../src/router.js';
// import { routes } from '../src/routes.js';

// jest.mock('../../src/lib/firebase.auth-util.js')

const rutas = [{
        path: '/',
        template: '',
        script: () => {

        },
    },
    {
        path: '/registro',
        template: '',
        script: () => {},
    }
];
const router = new Router(rutas);

describe('registro', () => {
    it('debería Redireccionar al hash registro', () => {
        // paso 1: Pintar la vista de registro
        router.loadRoute('registro');
        // paso 2: Darle valores a los input
        // paso 3: Hacer click en el boton
        // paso 4: Verificar que la url cambie
        expect(window.location.hash).toBe('registro');
    });
});