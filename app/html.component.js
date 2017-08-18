"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HtmlComponent = (function () {
    function HtmlComponent() {
        this.listaEstudiantes = [
            { id: 1, nombre: 'Jaime', apellido: 'Lopez', edad: 35, materias: [{ id: 1, nombre: 'Calculo', semestre: 10 }] },
            { id: 2, nombre: 'Diana', apellido: 'Muñoz', edad: 28, materias: [{ id: 2, nombre: 'Metematicas', semestre: 5 }] },
            { id: 3, nombre: 'Jhonnier', apellido: 'Sanchez', edad: 33, materias: [] }
        ];
    }
    HtmlComponent.prototype.seleccionarEstudiante = function (estudiante) {
        this.materias = estudiante.materias;
    };
    HtmlComponent = __decorate([
        core_1.Component({
            selector: 'html',
            template: "\n        \n        <label for=\"usr\">Name:</label>\n       \n        <h3>Listado de Estudiantes</h3>\n       \n        <table class=\"table table-striped\">\n             <tr>\n                 <td>Id</td>\n                 <td>Nombre</td>\n                 <td>Apellido</td>\n             </tr>\n             <tr *ngFor=\"let estudiante of listaEstudiantes; let i=index;\">\n                 <td (click)=\"seleccionarEstudiante(estudiante)\">{{estudiante.id}}</td>\n                 <td>{{estudiante.nombre}}</td>\n                 <td>{{estudiante.apellido}}</td>\n             </tr>\n        </table>\n        <materias [materiasEstudiante]=\"materias\"></materias>"
        }), 
        __metadata('design:paramtypes', [])
    ], HtmlComponent);
    return HtmlComponent;
}());
exports.HtmlComponent = HtmlComponent;
//# sourceMappingURL=html.component.js.map