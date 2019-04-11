const hbs = require('hbs');
const funciones = require('./../funciones');

hbs.registerHelper('obtenerPromedio', (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3;
})

hbs.registerHelper('crearCurso', (nombre, id, valor, modalidad, duracion) => {
    funciones.crearCurso(nombre, id, valor, modalidad, duracion);
    if (texto == true) {
        return '<div class="container">\
                <div class="alert alert-danger" role="alert">\
                Ya existe un curso con el id escrito\
                </div></div>';
    }
})

hbs.registerHelper('crearUsuario', (documento, nombre, correo, telefono) => {
    funciones.crearUsuario(documento, nombre, correo, telefono);
    if (valor == true) {
        return '<div class="container">\
                <div class="alert alert-danger" role="alert">\
                Ya existe un usuario con el documento escrito\
                </div></div>';
    } else {
        return '<div class="alert alert-success" role="alert">\
                    <h4 class="alert-heading">¡Felicitaciones!</h4>\
                    <p>Has creado tu usuario exitosamente</p>\
                </div>';
    }
})

hbs.registerHelper('listarCursos', () => {
    listaCursos = require('./../listado-cursos.json');
    let texto = '<div class="container">\
                <table class="table table-striped table-hover">\
                <thead class="thead-dark">\
                <th>Nombre</th>\
                <th>Valor</th>\
                </thead>\
                <tbody>';
    listaCursos.forEach(curso => {
        texto = texto +
            '<tr>' +
            '<td>' + curso.nombre + '</td>' +
            '<td>' + curso.valor + '</td>'

    });

    texto = texto + '</tr></tbody></table></div>'

    return texto;
})

hbs.registerHelper('listar', () => {
    listaEstudiantes = require('./../listado.json');
    let texto = '<table class="table table-striped table-hover">\
                <thead class="thead-dark">\
                <th>Nombre</th>\
                <th>Matemáticas</th>\
                <th>Inglés</th>\
                <th>Programación</th>\
                </thead>\
                <tbody>';
    listaEstudiantes.forEach(estudiante => {
        texto = texto +
            '<tr>' +
            '<td>' + estudiante.nombre + '</td>' +
            '<td>' + estudiante.matematicas + '</td>' +
            '<td>' + estudiante.ingles + '</td>' +
            '<td>' + estudiante.programacion + '</td>'
    });

    texto = texto + '</tr></tbody></table>'

    return texto;
})

hbs.registerHelper('listarCursos2', () => {
    listaCursos = require('./../listado-cursos.json');

    let texto = '<div class="container" > <br> <h2 class="text-center"> Ver detalles del curso </h2> <br>  <div class="accordion" id="desplegar">'
    i = 1;
    listaCursos.forEach(curso => {
        texto = texto +

            `<div class="card">
                <div class="card-header" id="heading${i}">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                            curso ${curso.nombre}
                        </button>
                    </h2>
                </div>

                <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#desplegar">
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Valor: ${curso.valor}</li>
                            <li class="list-group-item">Intensidad: ${curso.intensidad} horas </li>
                            <li class="list-group-item"> Modalidad: ${curso.modalidad}</li>
                        </ul>     
                    </div>
                </div>
            </div>`

        i = i + 1;
        
    });

    texto = texto + '</div> </div>'
    return texto;
})

hbs.registerHelper('seleccionarCursos', () => {
    listaCursos = require('./../listado-cursos.json');
    let texto = `<option value="-">-</option>`;
    listaCursos.forEach(curso => {
        texto = texto + `<option value="${curso.id}">${curso.nombre}</option>`
    });
    return texto;

})

hbs.registerHelper('inscribirCurso', (documento, nombre) => {
    
    funciones.inscribirCurso(nombre, documento)
    if (comprobar == false) {
        return '<div class="container">\
                <div class="alert alert-danger" role="alert">\
                Error al inscribirse\
                </div></div>';
    } else {
        return '<div class="alert alert-success" role="alert">\
                    <h4 class="alert-heading">¡Felicitaciones!</h4>\
                    <p>Te has inscrito al curso exitosamente</p>\
                </div>';
    }
})
hbs.registerHelper("login", (doc) => {

    funciones.login(doc);
    

})