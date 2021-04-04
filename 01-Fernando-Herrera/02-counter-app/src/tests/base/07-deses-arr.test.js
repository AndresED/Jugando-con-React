import {retornaArreglo} from "../../base/07-deses-arr";
describe('Pruebas en 07-des-arr',()=>{
    test('debe de retornar un string y un número',()=>{
        const arr = retornaArreglo();
        expect(arr).toEqual(['ABC', 123]);
    })
})