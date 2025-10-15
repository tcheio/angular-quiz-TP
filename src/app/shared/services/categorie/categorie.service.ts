import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategorieService {
  categories: any[] = [];

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/categories");
  }

  getCategoriesById(id: number) {
    return this.categories.find((category) => category.id === id);
  }
}
