describe('pruebas en <demoComponent />', () => {
    test('Esta prueba no debe fallar', () => {
        //1. Inicializacion
        const message1 = 'Hola mundo';
    
        //2. Estimulo
        const message2 = message1.trim();
    
        //3. Observar el comportamiento esperado
        expect(message1).toBe(message2);
    
        // if ( 0 === 1 ) {
        //     throw new Error('No puede dividir cero');
        // }
    })
})

