/* ============================================
; Title:  5.4 Dialogs
; Author: Professor Krasso
; Date:   30 January 2021
; Modified by: Wen-D
; Description: 5.4 Dialogs
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {
  // adding o	Add the MatDialogRef and MAT_DIALOG_DATA to the components constructor

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
       //mapping the data.book value to the book variable
       this.book = data.book;
  }

  ngOnInit(): void {
  }

}
