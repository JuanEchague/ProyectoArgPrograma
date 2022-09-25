import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/item';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-registrar-item',
  templateUrl: './registrar-item.component.html',
  styleUrls: ['./registrar-item.component.css']
})
export class RegistrarItemComponent implements OnInit {

  item : Item = new Item();
  constructor(private itemServicio:ItemService,private router:Router) { }

  ngOnInit(): void {
    
  }
  guardarItem(){
    this.itemServicio.registrarItem(this.item).subscribe(dato => {
      console.log(dato);
      this.irAComentarios();
    },error => console.log(error));
  }
irAComentarios(){
  this.router.navigate(['sitio']);
}
onSubmit(){
  this.guardarItem();
}
}
