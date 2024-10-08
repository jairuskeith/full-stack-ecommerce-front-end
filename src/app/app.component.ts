import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavModule } from "@angular/material/sidenav";
import { MatMenu, MatMenuContent, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatListItem } from "@angular/material/list";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductListComponent,
    MatSidenavModule,
    MatDrawerContainer,
    MatDrawerContent,
    MatDrawer,
    MatMenuItem,
    MatMenuContent,
    MatMenu,
    MatIconButton,
    MatMenuTrigger,
    MatIcon,
    MatButton,
    MatToolbar,
    HeaderComponent,
    FooterComponent,
    MatListItem,
    SideNavComponent,
    SearchBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}
