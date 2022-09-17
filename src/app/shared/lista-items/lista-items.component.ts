import { Component, OnInit } from '@angular/core';
import { Item } from '../../item';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit {
  items:Item[];

  constructor(private itemServicio:ItemService) { }

  ngOnInit(): void {
   this.obtenerItems();
  }
  private obtenerItems(){
    this.itemServicio.obtenerListaItems().subscribe(dato =>{
      this.items = dato;
    })
  }

}
