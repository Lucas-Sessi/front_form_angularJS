import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'home'},
            { label: 'books', icon: 'pi pi-fw pi-calendar', routerLink: 'books'},
            { label: 'Login', icon: 'pi pi-fw pi-pencil', routerLink: 'login'},
            { label: 'Cadastro', icon: 'pi pi-fw pi-file', routerLink: 'cadastro'},
            { label: 'Sobre', icon: 'pi pi-fw pi-cog', routerLink: 'sobre'}
        ];

        this.activeItem = this.items[0];
    }
}
