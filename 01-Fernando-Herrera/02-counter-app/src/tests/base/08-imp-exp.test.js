import {getHeroeById,getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';
describe('Pruebas en funciones de heroes',()=>{
    test('Debe de retornar un heroe por id',()=>{
        const id = 1;
        const heroe = getHeroeById(id);
        const heroesData = heroes.find(h=>h.id==id);
        expect(heroe).toEqual(heroesData);
    })

    test('Debe de retornar un heroe solo de DC',()=>{
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h=>h.owner==owner);
        expect(heroe).toEqual(heroesData);
    })

    test('Debe de retornar un heroe solo de Marvel',()=>{
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h=>h.owner==owner);
        expect(heroe).toEqual(heroesData);
    })
})