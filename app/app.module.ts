import { NgModule }      			from '@angular/core';
import { BrowserModule } 			from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';

import { RouterModule }				from '@angular/router';
import { NgbModule }				from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  			from './app.component';
import { MenuComponent } 			from './menu.component';

import { NoticiasService } 			from './noticias.service';
import { NoticiasListComponent } 	from './noticias-list.component';
import { NoticiaDocComponent }		from './noticia-doc.component';
import { NoticiaImgComponent }		from './noticia-img.component';
import { NoticiaComponent }			from './noticia.component';

import { routing }					from './routing';

@NgModule({
	imports : 	  [BrowserModule,
				   HttpModule,
				   JsonpModule,
				   routing,
				   NgbModule.forRoot()],
	declarations: [AppComponent,
				   MenuComponent,
				   NoticiaComponent,
				   NoticiasListComponent,
				   NoticiaDocComponent,
				   NoticiaImgComponent],
	providers:	  [NoticiasService],
	bootstrap:    [AppComponent]
})



export class AppModule {}