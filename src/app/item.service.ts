import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //esta url obtiene datos del back end
  private baseURL="http://localhost:8080/api/v1/items";

  constructor(private httpClient : HttpClient) { }
  //obtener lista de items
  obtenerListaItems():Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseURL}`);
  }

  //registrar items
  registrarItem(item:Item) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,item);

  }
  
  //actualizar items
  actualizarItem(id:number,item:Item) : Observable<Object>{
    return this.httpClient.put<Item>(`${this.baseURL}/${id}`,item);
  }

  //buscar item por id
  obtenerItemPorId(id:number):Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseURL}/${id}`);
  }

  //eliminar item
  eliminarItem(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
