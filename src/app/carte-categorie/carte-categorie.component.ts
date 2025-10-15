import { Component, Input } from "@angular/core";
import { CategorieService } from "../shared/services/categorie/categorie.service";

@Component({
  selector: "app-carte-categorie",
  standalone: false,
  templateUrl: "./carte-categorie.component.html",
  styleUrl: "./carte-categorie.component.scss",
})
export class CarteCategorieComponent {
  @Input() categories: any[] = [];

  constructor(private CategorieService: CategorieService) {}

  getCategoryById(id: number) {
    return this.CategorieService.getCategoriesById(id);
  }
}
