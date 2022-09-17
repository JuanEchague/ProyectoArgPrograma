import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { CardComponent } from './card/card.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { HttpClientModule } from'@angular/common/http';
import { SitioComponent } from './sitio/sitio.component';
import { RegistrarItemComponent } from './registrar-item/registrar-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    TabsComponent,
    CardComponent,
    ListaItemsComponent,
    SitioComponent,
    RegistrarItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[HeaderComponent, FooterComponent, CarouselComponent, TabsComponent, ListaItemsComponent,SitioComponent,RegistrarItemComponent]
})
export class SharedModule { }
