import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Covid19Stats, Country, Globals } from '../Covid19-stats';

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
  private apiUrlLatestNews = 'https://api.covid19api.com/world';

  constructor(private http: HttpClient) {}

  getStats(): Observable<Covid19Stats> {
    return this.http.get<Covid19Stats>(this.apiUrl);
  }

  getLatestNews(daysBeforeToday: number): Observable<Globals[]> {
    // This date is used due to the API returns everything if no matches
    let toDay = new Date();
    let fromDay = new Date();
    toDay.setHours(0,0,0,0);
    fromDay.setHours(0,0,0,0);
    fromDay.setDate(new Date().getDate() - daysBeforeToday)

    let url = `${this.apiUrlLatestNews}`;
    url += `?from=${fromDay.toISOString()}&to=${toDay.toISOString()}`;

    return this.http.get<Globals[]>(url);
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
