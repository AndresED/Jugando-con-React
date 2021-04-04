describe('Pruebas del archivo demo.test.js',()=>{ 
    test('Debe de ser igual los strings', () => {
        // 1. Inicializacion
         const mensaje1 = 'Hola mundo';
     
         // 2. estimulo
         const mensaje2 = 'Hola mundo';
     
         // 3. Observar el comportamiento
         expect(mensaje1).toBe(mensaje2);
     
     });
})

