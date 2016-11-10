System.register(['@angular/core', './noticia-nueva', './rxjs-operators'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, noticia_nueva_1;
    var NoticiaCrearComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (noticia_nueva_1_1) {
                noticia_nueva_1 = noticia_nueva_1_1;
            },
            function (_1) {}],
        execute: function() {
            NoticiaCrearComponent = (function () {
                function NoticiaCrearComponent() {
                    this.model = new noticia_nueva_1.NoticiaNueva("Título", "Este es el cuerpo", 3, 15, '2016-03-12', 0);
                    this.submitted = false;
                }
                NoticiaCrearComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                Object.defineProperty(NoticiaCrearComponent.prototype, "diagnostic", {
                    get: function () {
                        return JSON.stringify(this.model);
                    },
                    enumerable: true,
                    configurable: true
                });
                NoticiaCrearComponent = __decorate([
                    core_1.Component({
                        selector: 'nueva-noticia',
                        templateUrl: 'app/noticia-crear.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], NoticiaCrearComponent);
                return NoticiaCrearComponent;
            }());
            exports_1("NoticiaCrearComponent", NoticiaCrearComponent);
        }
    }
});
