function obtenerUsuario(id, callback) {
    let usuario;
    setTimeout(() => {
        if (id === 1) {
            usuario = { id: 1, nombre: 'John Doe' };
            callback(usuario); //Usamos la función callback para llamar a la función obtenerusuario después del tiempo indicado y asignar un valor a la variable usuario.
        }
    }, 2000);
}

obtenerUsuario(1, (usuario) => {
    console.log(usuario);
 });