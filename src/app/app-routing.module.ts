import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitioComponent } from './shared/sitio/sitio.component';
import { RegistrarItemComponent } from './shared/registrar-item/registrar-item.component';
import { ActualizarItemComponent } from './shared/actualizar-item/actualizar-item.component';
import { ItemDetallesComponent } from './shared/item-detalles/item-detalles.component';

const routes: Routes = [
  {path : 'registrar-comentario', component: RegistrarItemComponent},
  {    path : 'sitio', component: SitioComponent  },
  {   path: '', redirectTo:'sitio',pathMatch:'full'},
  {path:'actualizar-item/:id', component:ActualizarItemComponent},
  {path:'item-detalles/:id',component: ItemDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
