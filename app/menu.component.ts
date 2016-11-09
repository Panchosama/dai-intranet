import { Component} from '@angular/core';

@Component({
	selector:'app-menu',
	templateUrl: 'app/menu.component.html'
})


export class MenuComponent {
	notpend="25";

	public isCollapsedNews = true;
	public isCollapsedDocs = true;
}