System.register(['@angular/router', './noticias-list.component', './noticia.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, noticias_list_component_1, noticia_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (noticias_list_component_1_1) {
                noticias_list_component_1 = noticias_list_component_1_1;
            },
            function (noticia_component_1_1) {
                noticia_component_1 = noticia_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: 'noticias',
                    component: noticias_list_component_1.NoticiasListComponent
                },
                {
                    path: 'noticias/:idnot',
                    component: noticia_component_1.NoticiaComponent
                },
                /*{
                  path: 'noticias/nueva',
                  component: NoticiaCrearComponent
                },*/
                {
                    path: '',
                    redirectTo: '/noticias',
                    pathMatch: 'full'
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
