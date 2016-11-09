System.register(['@angular/core', './noticias.service'], function(exports_1, context_1) {
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
    var core_1, noticias_service_1;
    var NoticiaDocComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (noticias_service_1_1) {
                noticias_service_1 = noticias_service_1_1;
            }],
        execute: function() {
            NoticiaDocComponent = (function () {
                function NoticiaDocComponent(noticiasService) {
                    this.noticiasService = noticiasService;
                    this.mode = 'Observable';
                }
                NoticiaDocComponent.prototype.getNoticiaDocs = function (idnot) {
                    var _this = this;
                    this.noticiasService.getNoticiaDocs(idnot)
                        .subscribe(function (docs) { return _this.docs = docs; }, function (error) { return _this.errorMessage = error; });
                };
                NoticiaDocComponent.prototype.ngOnInit = function () {
                    console.log(this.idnew);
                    this.getNoticiaDocs(this.idnew);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], NoticiaDocComponent.prototype, "idnew", void 0);
                NoticiaDocComponent = __decorate([
                    core_1.Component({
                        selector: 'noticia-docs',
                        templateUrl: 'app/noticia-doc.component.html'
                    }), 
                    __metadata('design:paramtypes', [noticias_service_1.NoticiasService])
                ], NoticiaDocComponent);
                return NoticiaDocComponent;
            }());
            exports_1("NoticiaDocComponent", NoticiaDocComponent);
        }
    }
});
