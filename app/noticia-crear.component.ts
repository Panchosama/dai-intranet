import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { NoticiaDet } from './noticia-det';
import { NoticiasService } from './noticias.service';

import './rxjs-operators';

@Component({
	selector: 'nueva-noticia',
	templateUrl: 'app/noticia-crear.component.html'
})

export class NoticiaCrearComponent implements OnInit {
//Variables
	noticia: NoticiaDet[];
	errorMessage: string;

	mode= 'Observable';
//Constructor
	constructor (private noticiasService: NoticiasService,
				private route: ActivatedRoute,
				private router: Router) { }

	getNoticia(idnew: string){
		this.noticiasService.getNoticia(idnew)
		.subscribe(
           noticia => this.noticia = noticia,
           error =>  this.errorMessage = <any>error);
	}

  	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
	      	let id = params['idnot'];
	      	this.getNoticia(id)
       			//.then(noticia => this.noticia = noticia);
    	});
	}

	
}