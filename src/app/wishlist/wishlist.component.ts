/* ============================================
; Title:  In & Out Book Part Uno
; Author: Professor Krasso
; Date:  4 February 2021
; Modified by: Wendy Leon
; Description: In & Out Book Part Uno
;===========================================
*/


import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist.item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    console.log('Inside the wishlist.component.ts (parent) - updateItemsHandler() function');
    console.log(item);
    this.items.push(item);
    console.log(this.items);
  }

}
