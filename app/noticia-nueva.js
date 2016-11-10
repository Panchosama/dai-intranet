System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NoticiaNueva;
    return {
        setters:[],
        execute: function() {
            NoticiaNueva = (function () {
                function NoticiaNueva(titulo, cuerpo, depto, autor, fecha, categ) {
                    this.titulo = titulo;
                    this.cuerpo = cuerpo;
                    this.depto = depto;
                    this.autor = autor;
                    this.fecha = fecha;
                    this.categ = categ;
                }
                return NoticiaNueva;
            }());
            exports_1("NoticiaNueva", NoticiaNueva);
        }
    }
});
