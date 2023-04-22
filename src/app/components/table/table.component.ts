import { Component, Input } from '@angular/core';
import {ItemTabel} from '../../models/item-tabel.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TabelComponent {
  @Input() items: ItemTabel[] = [];

  ngOnInit() {
    this.isEmpty();
  }

  isEmpty(): boolean {
    return this.items.length === 0 ? false : true;
  }
}
