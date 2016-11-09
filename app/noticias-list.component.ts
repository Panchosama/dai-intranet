import { Component, OnInit } from '@angular/core';

import { Noticia } from './noticia';
import { NoticiasService } from './noticias.service';

@Component({
	//inputs: ['noticia'],
	selector:'noticias-list',
	templateUrl: 'app/noticias-list.component.html'
})

export class NoticiasListComponent implements OnInit{
	noticias: Noticia[];
	errorMessage: string;
	
	mode = 'Observable';

	constructor (private noticiasService: NoticiasService) { }

	/*getNoticias(): void {
		this.noticiasService.getNoticias().then(n => this.noticias = n);
	}*/

	getNoticias(): void {
	    this.noticiasService.getNoticias()
           .subscribe(
           noticias => this.noticias = noticias,
           error =>  this.errorMessage = <any>error);
  	}
  	
	ngOnInit(): void {
		this.getNoticias();
	}
}