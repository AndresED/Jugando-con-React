import { getImagen } from "../../base/11-async-await";
describe('Pruebas con async y await',()=>{
    test('Debe de retornar el url de la imagen',async ()=>{
        const url = await getImagen();
        console.log(url)
    })
});