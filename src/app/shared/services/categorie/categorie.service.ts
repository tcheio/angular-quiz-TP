import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  categories: any[] = [];

  constructor(private http: HttpClient) { }

  getCategories() {
    this.http.get('http://localhost:3000/categories').subscribe((categories: any) => {
      for (const category of categories) {
          this.categories.push({id: category.id, label: category.label});
        }
      }
    )};

    getCategoriesById(id: number) {
      return this.categories.find(category => category.id === id);
    }
  }
