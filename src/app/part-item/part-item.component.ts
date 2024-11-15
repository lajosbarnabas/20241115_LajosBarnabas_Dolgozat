import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComputerPart } from '../models/computerpart.model';
import { Parts } from '../models/parts.model';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-part-item',
  templateUrl: './part-item.component.html',
  styleUrl: './part-item.component.css',
})
export class PartItemComponent {
  @Input() oneComputerPart: ComputerPart | undefined;
  @Input() oneItem: Parts | undefined;
  @Output() selectionChanged = new EventEmitter<void>();


  totalMoney = 0;

  addToCart(itemToCart: Parts): void{
    itemToCart.price += this.totalMoney;

    this.selectionChanged.emit();
  }
}
