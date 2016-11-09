System.register(['@angular/core', '@angular/router', './noticias.service', './rxjs-operators'], function(exports_1, context_1) {
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
    var core_1, router_1, noticias_service_1;
    var NoticiaCrearComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (noticias_service_1_1) {
                noticias_service_1 = noticias_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            NoticiaCrearComponent = (function () {
                //Constructor
                function NoticiaCrearComponent(noticiasService, route, router) {
                    this.noticiasService = noticiasService;
                    this.route = route;
                    this.router = router;
                    this.mode = 'Observable';
                }
                NoticiaCrearComponent.prototype.getNoticia = function (idnew) {
                    var _this = this;
                    this.noticiasService.getNoticia(idnew)
                        .subscribe(function (noticia) { return _this.noticia = noticia; }, function (error) { return _this.errorMessage = error; });
                };
                NoticiaCrearComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        var id = params['idnot'];
                        _this.getNoticia(id);
                        //.then(noticia => this.noticia = noticia);
                    });
                };
                NoticiaCrearComponent = __decorate([
                    core_1.Component({
                        selector: 'nueva-noticia',
                        templateUrl: 'app/noticia-crear.component.html'
                    }), 
                    __metadata('design:paramtypes', [noticias_service_1.NoticiasService, router_1.ActivatedRoute, router_1.Router])
                ], NoticiaCrearComponent);
                return NoticiaCrearComponent;
            }());
            exports_1("NoticiaCrearComponent", NoticiaCrearComponent);
        }
    }
});
