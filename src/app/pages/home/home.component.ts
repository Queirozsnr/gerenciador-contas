import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ItemTabel } from '../../models/item-tabel.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{
  items: ItemTabel[] = [];
  newItem: string = '';
  formulario: FormGroup;

  ngOnInit(): void {
    this.formulario.patchValue({
      title: this.formulario.value.nome,
      desc: this.formulario.value.desc,
      value: this.formulario.value.value,
      date: this.formulario.value.date,
    })
  }

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      title: new FormControl(''),
      desc: new FormControl(''),
      value: new FormControl(''),
      date: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.items.push({
        title: this.formulario.value.title,
        desc: this.formulario.value.desc,
        value: this.formulario.value.value,
        date: this.formulario.value.date,
      });
    } else {
      alert('Formulário inválido');
    }
    console.log(this.items);
    
  }
}
