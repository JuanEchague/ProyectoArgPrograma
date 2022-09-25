import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from './../../item';
import { ItemService } from './../../item.service';
//import swal from 'sweetalert2';


@Component({
  selector: 'app-actualizar-item',
  templateUrl: './actualizar-item.component.html',
  styleUrls: ['./actualizar-item.component.css']
})
export class ActualizarItemComponent implements OnInit {
id:number;
item:Item = new Item();
 
  constructor(private itemService:ItemService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.itemService.obtenerItemPorId(this.id).subscribe(dato =>{
      this.item = dato;
      },error=>console.log(error));
  }
  irAListaDeItems(){
    this.router.navigate(['/sitio']);
    //swal('Item actualizado',`El item de ${this.item.nombre} ha sido actualizado con exito`,`success`);
  }
  

  onSubmit(){
    this.itemService.actualizarItem(this.id,this.item).subscribe(dato => {
    this.irAListaDeItems();
    },error => console.log(error));
  }

}
