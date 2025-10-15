import { Component } from '@angular/core';
import { CategorieService } from "../shared/services/categorie/categorie.service";

@Component({
  selector: 'app-carte-categorie',
  standalone: false,
  templateUrl: './carte-categorie.component.html',
  styleUrl: './carte-categorie.component.scss'
})
export class CarteCategorieComponent {
  categories: any[] = this.CategorieService.categories;

  constructor(private CategorieService: CategorieService) { }
  
    ngOnInit(): void {
    this.CategorieService.getCategories();
  }

  getCategoryById(id: number) {
    return this.CategorieService.getCategoriesById(id);
  }
}
