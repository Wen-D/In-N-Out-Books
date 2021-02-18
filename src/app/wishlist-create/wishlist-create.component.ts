/* ============================================
; Title:  In & Out Book Part Uno
; Author: Professor Krasso
; Date:  4 February 2021
; Modified by: Wendy Leon
; Description: In & Out Book Part Uno
;===========================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist.item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  // item of type I wish list item
  item: IWishlistItem;

  constructor() {
    // I wish list item instantiation
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  addItem() {
    console.log('Inside wishlist-create.component.ts (child) - addItem() function');
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })
    // reset the value of item
    this.item = {} as IWishlistItem;
  }
}
