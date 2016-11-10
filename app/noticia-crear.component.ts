import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NoticiaNueva } from './noticia-nueva';

import './rxjs-operators';

@Component({
	selector: 'nueva-noticia',
	templateUrl: 'app/noticia-crear.component.html'
})

export class NoticiaCrearComponent{
   
   model= new NoticiaNueva("Título","Este es el cuerpo",3,15,'2016-03-12',0);

   submitted= false;

   onSubmit(){
   	this.submitted=true
   }

   get diagnostic() { 
   	return JSON.stringify(this.model); 
   }


}