import {getSaludo} from '../../base/02-template-string';
import '@testing-library/jest-dom';
describe('Pruebas sobre el archivo template string',()=>{ 
    test('prueba en el metodo getSaludo',()=>{
        // preparacion
        const nombre = 'Andres';
        // EStimulo
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre);
    });
    test('debe de retornar Hola Carlos si no se le envia ningun parametro',()=>{
        // preparacion
        const saludoLocal = 'Hola Carlos';
        // estimulo
        const saludo = getSaludo();
        // evaluar comportamiento
        expect(saludo).toBe(saludoLocal);
    })
});