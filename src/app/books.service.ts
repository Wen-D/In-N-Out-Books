/*============================================
; Title: In and Out Part Deux
; Author: Professor Krasso
; Date:   28 January 2021
; Modified by: Wendy Leon
; Description:  In and Out Part Deux
;===========================================
*/

// external files import
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //new variable named isbns of type string array
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ]

  constructor(private http: HttpClient) {}

  getBooks(){
  //variable named params of type HttpParams
  let params = new HttpParams();

  //adding entries using the params.append function
  params = params.append('bibkeys', `ISBN: ${this.isbns.join(',')}`);
  params = params.append('format', 'json');
  params = params.append('jscmd', 'details');
  //	return the http.get
  //function passing in the openlibrary url and the params object
  return this.http.get('https://openlibrary.org/api/books', {params: params});
  }
}
