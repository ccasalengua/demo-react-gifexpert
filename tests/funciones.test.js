import { getUser } from '../src/base-pruebas/funciones';
import { getActiveUser } from '../src/base-pruebas/funciones';

describe('pruebas en funciones.js', () => {
    test('getUser debe retornar un objeto', ()=> {
        const user = getUser();
        const testUser = {
            uid: 'ABC123',
            username: 'Carlos1'
        };

        expect(user).toEqual(testUser);
    });
})

describe('pruebas en funciones.js', () => {
    test('getActiveUser debe retornar un objeto', ()=> {
        const name = 'Carlos';
        const user = getActiveUser(name);
        const testUser = {
            uid: 'ABC567',
            username: name
        };

        expect(user).toEqual(testUser);
    });
})