import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Covid19Stats, Country } from '../Covid19-stats';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class Covid19StatsService {
  private apiUrl = 'https://api.covid19api.com/summary';

  constructor(private http: HttpClient) {}

  getStats(): Observable<Covid19Stats> {
    return this.http.get<Covid19Stats>(this.apiUrl);
  }

  sortData(data: Country[], sortBy: keyof Country, ascending: boolean): Country[] {
    return data.sort((a: Country, b: Country) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      if (valueA === valueB) return 0

      if (valueA > valueB) return ascending === true ? 1 : -1;
    
      return ascending === true ? -1 : 1;
    })
  }
}
