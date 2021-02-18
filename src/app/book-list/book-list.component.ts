/* ============================================
; Title:  In & Out Book Part Uno
; Author: Professor Krasso
; Date:   27 January 2021
; Modified by: Wendy Leon
; Description: In & Out Book Part Uno
;===========================================
*/
//external files import
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

import {MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  books: Array<IBook> = [];

  book: IBook;

    //constructor calls getbooks method
    constructor(private booksService: BooksService, private Dialog: MatDialog) {
      // subscribe the getBooks() function
      this.booksService.getBooks().subscribe( res => {

        console.log(res);
        //for loop check if the res.hasOwnProperty(key) is true
        for (let key in res) {
          if (res.hasOwnProperty(key)) {
            let authors = [];
            if (res[key].details.authors) {
              authors = res[key].details.authors.map(function(author) {
                return author.name;
              })
            }

            this.books.push({
              isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
              title: res[key].details.title,
              description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
              numOfPages: res[key].details.number_of_pages,
              authors: authors
            })
          }
        }
      } );
     }

    ngOnInit(): void {
    }
  //function receives isbn and finds book match and logs it to the console
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);
    // dialogRef object assigned to dialog.open() function
    const dialogRef = this.Dialog.open(BookDetailsDialogComponent, {
      data: { book: this.book },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);
    // Calling the afterClosed() function and setting the book variable to null
    dialogRef.afterClosed().subscribe(
      result => {
        if (result === 'confirm') {
          this.book = null
        }
    });

  }
}
