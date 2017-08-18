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
var PipesComponent = (function () {
    function PipesComponent() {
        this.cadena = "Carlos castro";
        this.valor = 30;
        this.fecha = new Date(1999, 19, 1);
        this.pago = 1233.34;
        this.listado = [{ nombre: 'Juan', edad: 11 },
            { nombre: 'Carlos', edad: 11 }];
    }
    PipesComponent = __decorate([
        core_1.Component({
            selector: 'pipes',
            template: "<div>\n                 <span>cadena:{{cadena | uppercase}}</span>   \n                 <br/>\n                 <span>cadena:{{cadena | lowercase}}</span>   \n                 <br/>\n                 <span>Fecha:{{fecha | date:'fullDate'}}</span> \n                 <br/>\n                 <span>Pago:{{pago | number:'4.2-2'}}</span>  \n                 <br/>\n                 <span>Pago:{{pago | currency:'COP':true}}</span>    \n                 <br/>\n                 <span>Pago:{{listado | json}}</span>    \n              <div> "
        }), 
        __metadata('design:paramtypes', [])
    ], PipesComponent);
    return PipesComponent;
}());
exports.PipesComponent = PipesComponent;
//# sourceMappingURL=pipes.component.js.map