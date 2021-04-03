import {getUser,getUsuarioActivo} from '../../base/05-funciones';
import '@testing-library/jest-dom';
describe('Pruebas en 05-funciones',()=>{
    test('Debe retornar un objeto',()=>{
        // Declaracion
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        //Estimulo

        // Evaluando comportamiento
        expect(userTest).toEqual(user);
    });
    test('getUsuariosActivos debe de retornar un objeto',()=>{
        const name = 'El_Papi1502';
        const userTest = {
            uid: 'ABC567',
            username: name
        }
        const user = getUsuarioActivo(name);
        expect(userTest).toEqual(user);
    })
})