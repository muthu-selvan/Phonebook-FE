import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phonebook } from '../classes/Phonebook';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService implements OnInit {

  private API_URL = "http://localhost:8080/api/v1/phonebooks";

  phoneBookCols: any[] = [
    {field:'firstName', header:'First Name'},
    {field:'lastName', header:'Last Name'},
    {field:'phoneNo', header:'Phone Number'}
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getPhonebook(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }

  addPhonebook(phonebook: Phonebook): Observable<Object> {
    return this.http.post(`${this.API_URL}`, phonebook);
  }

  updatePhonebook(id: string, value: Phonebook): Observable<Object> {
    return this.http.put(`${this.API_URL}/${id}`, value);
  }

  deletePhonebook(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`, { responseType: 'text' });
  }

  getAllPhonebookInfo(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }

  public getPhonebookHeaders(): any[] {
    return this.phoneBookCols;
  }
}
