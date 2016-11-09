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
    var NoticiasListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (noticias_service_1_1) {
                noticias_service_1 = noticias_service_1_1;
            }],
        execute: function() {
            NoticiasListComponent = (function () {
                function NoticiasListComponent(noticiasService) {
                    this.noticiasService = noticiasService;
                    this.mode = 'Observable';
                }
                /*getNoticias(): void {
                    this.noticiasService.getNoticias().then(n => this.noticias = n);
                }*/
                NoticiasListComponent.prototype.getNoticias = function () {
                    var _this = this;
                    this.noticiasService.getNoticias()
                        .subscribe(function (noticias) { return _this.noticias = noticias; }, function (error) { return _this.errorMessage = error; });
                };
                NoticiasListComponent.prototype.ngOnInit = function () {
                    this.getNoticias();
                };
                NoticiasListComponent = __decorate([
                    core_1.Component({
                        //inputs: ['noticia'],
                        selector: 'noticias-list',
                        templateUrl: 'app/noticias-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [noticias_service_1.NoticiasService])
                ], NoticiasListComponent);
                return NoticiasListComponent;
            }());
            exports_1("NoticiasListComponent", NoticiasListComponent);
        }
    }
});
