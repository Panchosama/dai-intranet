System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var NoticiasService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            //import { NOTICIAS } from './noticia-mock';
            NoticiasService = (function () {
                function NoticiasService(http) {
                    this.http = http;
                    // URL to web api
                    this.noticiasUrl = 'http://192.168.1.12:80/intranet/ang_db/getNoticias.php';
                    this.noticiaUrl = 'http://192.168.1.12:80/intranet/ang_db/getNoticiaDet.php?id=';
                    this.noticiaDocUrl = 'http://192.168.1.12:80/intranet/ang_db/getNoticiaDocs.php?id=';
                    this.noticiaImgsUrl = 'http://192.168.1.12:80/intranet/ang_db/getNoticiaImgs.php?id=';
                }
                //Listado de noticias
                NoticiasService.prototype.getNoticias = function () {
                    return this.http.get(this.noticiasUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                //Noticia específica
                NoticiasService.prototype.getNoticia = function (idnot) {
                    var _paramUrl = this.noticiaUrl + idnot;
                    return this.http.get(_paramUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                //Documentos adjuntos en noticia
                NoticiasService.prototype.getNoticiaDocs = function (idnot) {
                    var _paramUrl = this.noticiaDocUrl + idnot;
                    return this.http.get(_paramUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                NoticiasService.prototype.getNoticiaImgs = function (idnot) {
                    var _paramUrl = this.noticiaImgsUrl + idnot;
                    return this.http.get(_paramUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                NoticiasService.prototype.handleError = function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                NoticiasService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NoticiasService);
                return NoticiasService;
            }());
            exports_1("NoticiasService", NoticiasService);
        }
    }
});
