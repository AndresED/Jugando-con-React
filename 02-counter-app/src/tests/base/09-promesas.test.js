import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";
describe('Pruebas con promesas',()=>{
    test('Debe de retornar un hero async',(done)=>{
        const id= 1;
        getHeroeByIdAsync(id).then((heroe)=>{
            expect(heroe).toEqual(heroes[0]);
            done();
        });
    })
    test('Debe de retornar un error si el heroe por id no existe async',(done)=>{
        const id= 10;
        getHeroeByIdAsync(id).then((heroe)=>{
            expect(heroe).toEqual(heroes[0]);
            done();
        }).catch((error)=>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    })
})