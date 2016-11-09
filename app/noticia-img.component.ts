import { Component , OnInit, Input } from '@angular/core';
import { NoticiasService }	  		from './noticias.service';
import { Imagen } 		  			from './imagen';


@Component({
	selector: 'noticia-imgs',
	templateUrl: 'app/noticia-img.component.html'
})

export class NoticiaImgComponent implements OnInit{ 
	imgs: Imagen[];

	errorMessage: string;
	mode = 'Observable';

	@Input() 
	idnew: string;
	
	constructor (private noticiasService: NoticiasService) { }

	getNoticiaImgs(idnot : string){
		this.noticiasService.getNoticiaImgs(idnot)
		.subscribe(
           imgs => this.imgs = imgs,
           error =>  this.errorMessage = <any>error);
	}

	 ngOnInit(): void{
	 	this.getNoticiaImgs(this.idnew);
	 }
}