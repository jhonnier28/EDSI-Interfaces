"use strict";
var Materia = (function () {
    function Materia(id, nombre, semestre) {
        this.id = id;
        this.nombre = nombre;
        this.semestre = semestre;
    }
    return Materia;
}());
exports.Materia = Materia;
var Estudiante = (function () {
    function Estudiante(id, nombre, apellidos, edad, materias) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = nombre;
        this.edad = edad;
        this.materias = materias;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
//# sourceMappingURL=estudiantes.js.map