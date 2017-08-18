var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Persona = (function () {
    function Persona(edad, nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        console.log("Se ha creado una persona");
    }
    Persona.prototype.saludar = function () {
        console.log("El nombre de la persona es: " + this.nombre + ", Apellido: " + this.apellido);
    };
    return Persona;
}());
var Trabajador = (function (_super) {
    __extends(Trabajador, _super);
    function Trabajador(edad, nombre, apellido, identificacion) {
        _super.call(this, edad, nombre, apellido);
        this.identificacion = identificacion;
    }
    Trabajador.prototype.mostrarIdentificacion = function () {
        console.log("La identificacion de: " + this.nombre + " " + this.apellido + " es: " + this.identificacion);
    };
    return Trabajador;
}(Persona));
var persona = new Persona(35, 'Jhonnier', 'Sanchez');
var trabajador = new Trabajador(40, 'Pepito', 'Perez', 15812);
persona.saludar();
trabajador.mostrarIdentificacion();
//# sourceMappingURL=persona.js.map