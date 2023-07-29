import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import queryString from "query-string";

export class BaseService {

  constructor(private http: HttpClient, private entityName: string) {
  }

  public get<T>(append: string = '', queryParams: any = null): Observable<T> {
    if (queryParams) {
      append += '?' + queryString.stringify(queryParams);
    }
    return this.http.get<T>(`${this.entityName}${append}`);
  }

  public put<T>(data: any, append: string = ''): Observable<T> {
    return this.http.put<T>(`${this.entityName}/${append}`, data);
  }

  public post<T>(data: any, append: string = ''): Observable<T> {
    return this.http.post<T>(`${this.entityName}/${append}`, data);
  }

  public delete(append: string = ''): Observable<any> {
    return this.http.delete(`${this.entityName}/${append}`);
  }
}
