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
var TemperaturaComponent = (function () {
    function TemperaturaComponent() {
        this.valor = 34456;
    }
    TemperaturaComponent = __decorate([
        core_1.Component({
            selector: 'temperatura',
            template: "<span>La temperatura es: </span>\n                  <span [ngClass]=\"{'btn-danger':valor>30, 'btn-warning':valor<20}\">{{valor}}</span>\n                  <br/>\n                  <span>La temperatura en grados Farenheit es: {{valor | farenheit}}</span>\n                  <br/>\n                  <span>Temperatura invertida: {{valor | numeroInvertido}}</span>\n                  "
        }), 
        __metadata('design:paramtypes', [])
    ], TemperaturaComponent);
    return TemperaturaComponent;
}());
exports.TemperaturaComponent = TemperaturaComponent;
//# sourceMappingURL=temperatura.component.js.map