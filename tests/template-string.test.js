import { getSaludo } from '../src/base-pruebas/template-string';

describe('pruebas en template-string', () => {
    test('getSaludo debe retornar "Hola Carlos"', ()=> {
        const name = 'Carlos';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
    });
})