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
var NumeroInvertido = (function () {
    function NumeroInvertido() {
    }
    NumeroInvertido.prototype.transform = function (valor, args) {
        /*----------------------
            Primera forma
         -----------------------*/
        var val = String(valor);
        var valInvertido = "";
        for (var i_1 = val.length - 1; i_1 > -1; i_1--) {
            valInvertido += val[i_1];
        }
        /*----------------------
            Segunda forma
         -----------------------*/
        var n = valor;
        var r = 0;
        var x = 1;
        // determinamos la longitud del numero
        while (n > 0) {
            n = Math.trunc(n / 10);
            x = x * 10;
        }
        n = valor;
        x = x / 10;
        //Invertimos el numero
        while (n > 0) {
            console.log('r: ' + r + ' n:' + n + ' n%10:' + n % 10);
            console.log('x: ' + x);
            r += (n % 10) * x;
            console.log('r after: ' + r);
            n = Math.trunc(n / 10);
            x = x / 10;
        }
        return valInvertido;
    };
    NumeroInvertido = __decorate([
        core_1.Pipe({ name: 'numeroInvertido' }), 
        __metadata('design:paramtypes', [])
    ], NumeroInvertido);
    return NumeroInvertido;
}());
exports.NumeroInvertido = NumeroInvertido;
//# sourceMappingURL=numeroInvertido.comoponent.js.map