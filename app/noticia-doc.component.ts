import { Component , OnInit, Input } from '@angular/core';
import { NoticiasService }	  from './noticias.service';
import { NoticiaDoc } 		  from './noticia-doc';


@Component({
	selector: 'noticia-docs',
	templateUrl: 'app/noticia-doc.component.html'
})

export class NoticiaDocComponent implements OnInit{ 
	docs: NoticiaDoc[];
	errorMessage: string;
	mode = 'Observable';

	@Input() 
	idnew: string;
	
	constructor (private noticiasService: NoticiasService) { }

	getNoticiaDocs(idnot : string){
		this.noticiasService.getNoticiaDocs(idnot)
		.subscribe(
           docs => this.docs = docs,
           error =>  this.errorMessage = <any>error);
	}

	 ngOnInit(): void{
	 	console.log(this.idnew);
	 	this.getNoticiaDocs(this.idnew);
	 }
}