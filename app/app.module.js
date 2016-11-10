System.register(['@angular/core', '@angular/platform-browser', '@angular/http', '@angular/forms', '@ng-bootstrap/ng-bootstrap', './app.component', './menu.component', './noticias.service', './noticias-list.component', './noticia-doc.component', './noticia-img.component', './noticia.component', './noticia-crear.component', './routing'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, forms_1, ng_bootstrap_1, app_component_1, menu_component_1, noticias_service_1, noticias_list_component_1, noticia_doc_component_1, noticia_img_component_1, noticia_component_1, noticia_crear_component_1, routing_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (ng_bootstrap_1_1) {
                ng_bootstrap_1 = ng_bootstrap_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (noticias_service_1_1) {
                noticias_service_1 = noticias_service_1_1;
            },
            function (noticias_list_component_1_1) {
                noticias_list_component_1 = noticias_list_component_1_1;
            },
            function (noticia_doc_component_1_1) {
                noticia_doc_component_1 = noticia_doc_component_1_1;
            },
            function (noticia_img_component_1_1) {
                noticia_img_component_1 = noticia_img_component_1_1;
            },
            function (noticia_component_1_1) {
                noticia_component_1 = noticia_component_1_1;
            },
            function (noticia_crear_component_1_1) {
                noticia_crear_component_1 = noticia_crear_component_1_1;
            },
            function (routing_1_1) {
                routing_1 = routing_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            http_1.JsonpModule,
                            routing_1.routing,
                            ng_bootstrap_1.NgbModule.forRoot(),
                            forms_1.FormsModule],
                        declarations: [app_component_1.AppComponent,
                            menu_component_1.MenuComponent,
                            noticia_component_1.NoticiaComponent,
                            noticias_list_component_1.NoticiasListComponent,
                            noticia_doc_component_1.NoticiaDocComponent,
                            noticia_img_component_1.NoticiaImgComponent,
                            noticia_crear_component_1.NoticiaCrearComponent],
                        providers: [noticias_service_1.NoticiasService],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
