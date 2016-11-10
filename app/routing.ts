import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasListComponent } from './noticias-list.component';
import { NoticiaComponent }   	 from './noticia.component';
import { NoticiaCrearComponent } from './noticia-crear.component';

const appRoutes: Routes = [
  {
    path: 'noticias',
    component: NoticiasListComponent
  },
  {
    path: 'noticias/:idnot',
    component: NoticiaComponent
  },
  {
    path: 'noticia/nueva',
    component: NoticiaCrearComponent
  },
  {
  	path: '',
  	redirectTo: '/noticias',
  	pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(appRoutes);