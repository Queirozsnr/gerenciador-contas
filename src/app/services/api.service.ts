import { Injectable } from '@angular/core';
import { ItemTabel } from '../models/item-tabel.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getScore(): Promise<Array<ItemTabel>> {
    const teste = [
      { nome: 'oi', idade: 13 },
      { nome: 'oiouiu', idade: 93 },
    ];
    return Promise.resolve(teste);
    // return this.api.get("scores/");
  }

  postScore(score:any){
    // this.api.post('scores/', score)
    //   .then((response:any) => console.log(response.data))
    //   .catch((err:any) => {
    //     console.error("ops! ocorreu um erro" + err);
    // });
    console.log(score + '\n__________________________ chegou no post do service :) __________________________');
    
  }
}
