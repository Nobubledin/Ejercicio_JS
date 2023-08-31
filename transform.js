const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['Javascript', 'HTML', 'CSS'],
        proyectos: [
            {id: 1, nombre: 'Proyecto 1'},
            {id: 2, nombre: 'Proyecto 2'}
        ]
    },
    {
        id: 2,
        nombre: 'María',
        habilidades: ['Pyton', 'SQL', 'Django'],
        proyectos: [
            {id: 3, nombre: 'Proyecto 3'},
            {id: 4, nombre: 'Proyecto 4'}
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Spring', 'Hibernate'],
        proyectos: [
            {id: 5, nombre: 'Proyecto 5'},
            {id: 6, nombre: 'Proyecto 6'}
        ]
    }
];

function obtenerdatos(datos) {
    const desarrolladoresJavascript = datos.filter(item => item.id === 1);
    return desarrolladoresJavascript;
}

const resultado = obtenerdatos(datos);

console.log(resultado)


function obtenerproyectos(datos) {
    const arrayproyectos = datos.flatMap(item => item.proyectos.map(proyecto => proyecto.nombre));
    return arrayproyectos;
}

const resultadoproyectos = obtenerproyectos(datos);
console.log(resultadoproyectos);