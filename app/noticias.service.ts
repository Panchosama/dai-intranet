import { Injectable } 		from '@angular/core';
import { Response, Http } 	from '@angular/http';

import { Noticia } 			from './noticia';
import { NoticiaDet }		from './noticia-det';
import { NoticiaDoc }		from './noticia-doc';
import { Imagen }			from './imagen';
//import 'rxjs/add/operator/toPromise';
import { Observable }     	from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { NOTICIAS } from './noticia-mock';

@Injectable()
export class NoticiasService {



	constructor(private http: Http) {}

// URL to web api
	private noticiasUrl 	= 'http://192.168.1.12:80/intranet/ang_db/getNoticias.php';  
	private noticiaUrl 	 	= 'http://192.168.1.12:80/intranet/ang_db/getNoticiaDet.php?id=';
	private noticiaDocUrl 	= 'http://192.168.1.12:80/intranet/ang_db/getNoticiaDocs.php?id=';
	private noticiaImgsUrl 	= 'http://192.168.1.12:80/intranet/ang_db/getNoticiaImgs.php?id=';

//Listado de noticias
  	getNoticias (): Observable<Noticia[]> {
	  return this.http.get(this.noticiasUrl)
	                  .map(response => response.json())
	                  	/*this.extractData)*/
	                  .catch(this.handleError);
	}

//Noticia específica
	getNoticia (idnot: string): Observable<NoticiaDet[]>{
		var _paramUrl = this.noticiaUrl + idnot;
		return this.http.get(_paramUrl)
				.map(response => response.json())
				.catch(this.handleError);
	}

//Documentos adjuntos en noticia
	getNoticiaDocs (idnot: string): Observable<NoticiaDoc[]>{
		var _paramUrl = this.noticiaDocUrl + idnot;
		return this.http.get(_paramUrl)
	                  .map(response => response.json())
	                  	/*this.extractData)*/
	                  .catch(this.handleError);
	}

	getNoticiaImgs (idnot: string): Observable<Imagen[]>{
		var _paramUrl = this.noticiaImgsUrl + idnot;
		return this.http.get(_paramUrl)
	                  .map(response => response.json())
	                  	/*this.extractData)*/
	                  .catch(this.handleError);
	}


  	private handleError(error: any): Observable<any> {
	   // In a real world app, we might use a remote logging infrastructure
	    // We'd also dig deeper into the error to get a better message
	    let errMsg = (error.message) ? error.message :
	      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
	    console.error(errMsg); // log to console instead
	    return Observable.throw(errMsg);
	}

}