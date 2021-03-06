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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var estudiantes_component_1 = require('./estudiantes.component');
var materias_component_1 = require('./materias.component');
var temperatura_component_1 = require('./temperatura.component');
var paises_component_1 = require('./paises.component');
var pipes_component_1 = require('./pipes.component');
var html_component_1 = require('./html.component');
var farenheitPipe_1 = require('./farenheitPipe');
var numeroInvertido_comoponent_1 = require('./numeroInvertido.comoponent');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent,
                estudiantes_component_1.EstudiantesComponent,
                materias_component_1.MateriasComponent,
                temperatura_component_1.TemperaturaComponent,
                paises_component_1.PaisesComponent,
                pipes_component_1.PipesComponent,
                html_component_1.HtmlComponent,
                farenheitPipe_1.FarenheitPipe,
                numeroInvertido_comoponent_1.NumeroInvertido],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map