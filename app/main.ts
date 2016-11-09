/* app/main.ts 
	le dice a Angular que inice la aplicación.
	El maquetado de la app es separado de la creación del módulo o presentar una vista. 
*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);