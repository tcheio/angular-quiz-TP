import { Component, Input } from "@angular/core";
import { CategorieService } from "../shared/services/categorie/categorie.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-carte-categorie",
  standalone: false,
  templateUrl: "./carte-categorie.component.html",
  styleUrl: "./carte-categorie.component.scss",
})
export class CarteCategorieComponent {
  @Input() categories: any[] = [];
  idCategorie: number = 0;

  constructor(private CategorieService: CategorieService, private router: Router) {}

  getCategoryById(id: number) {
    return this.CategorieService.getCategoriesById(id);
  }

  goToCategory(id: number) {
    this.router.navigate(['/quiz', id]);
  }


}
