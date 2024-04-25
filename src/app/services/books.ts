import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class BooksService {
    constructor(private http: HttpClient) {}

    url = 'http://localhost:3005/books'

    getData(): Observable<any> {
        return this.http.get(this.url)
    }

    findOneData(id: number): Observable<any> {
        return this.http.get(`${this.url}/find/${id}`)
    }

    postData(data: any): Observable<any> {
        return this.http.post<any>(this.url, data)
    }

    putData(id: number, data: any): Observable<any> {
        console.log('🚀 ~ file: books.ts ~ line 68 ~ BooksService ~ putData ~ data', id, data)
        return this.http.patch(`${this.url}/${id}`, data)
    }

    deleteData(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`)
    }
}