import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../item';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {
  items:Item[];

  constructor(private itemServicio:ItemService, private router:Router) { }

  ngOnInit(): void {
   this.obtenerItems();
  }

  actualizarItem(id:number){
    this.router.navigate(['actualizar-item',id]);

  }

  eliminarItem(id:number){
    this.itemServicio.eliminarItem(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerItems();
    })
  }

  private obtenerItems(){
    this.itemServicio.obtenerListaItems().subscribe(dato =>{
      this.items = dato;
    })
  }

}
