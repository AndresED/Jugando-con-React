


const nombre   = 'Andres';
const apellido = 'Esquivel';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );