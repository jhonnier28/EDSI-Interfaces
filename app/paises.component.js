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
var PaisesComponent = (function () {
    function PaisesComponent() {
    }
    PaisesComponent = __decorate([
        core_1.Component({
            selector: 'paises',
            template: "<div>\n                        <ul class=\"nav nav-tabs\">\n                            <li><a (click)=\"pais='Colombia'\" >Colombia</a></li>\n                            <li><a (click)=\"pais='Ecuador'\">Ecuador</a></li>\n                            <li><a (click)=\"pais='Peru'\">Peru</a></li>\n                            <li><a (click)=\"pais='Argentina'\">Argentina</a></li>\n                        </ul>\n                  <div> \n                  <div [ngSwitch]=\"pais\">\n                       <div *ngSwitchCase=\"'Colombia'\">Informacion de Colombia  </div>\n                       <div *ngSwitchCase=\"'Ecuador'\">Informacion de Ecuador   </div>\n                       <div *ngSwitchCase=\"'Peru'\"> Informacion de Peru  </div>\n                       <div *ngSwitchCase=\"'Argentina'\">Informacion de Argentina   </div>\n                       <div *ngSwitchDefault>Seleccione un pais</div>\n                  </div>\n                  "
        }), 
        __metadata('design:paramtypes', [])
    ], PaisesComponent);
    return PaisesComponent;
}());
exports.PaisesComponent = PaisesComponent;
//# sourceMappingURL=paises.component.js.map