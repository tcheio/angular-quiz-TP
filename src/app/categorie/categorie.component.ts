import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CategorieService } from "../shared/services/categorie/categorie.service";

@Component({
  selector: "app-categorie",
  standalone: false,
  templateUrl: "./categorie.component.html",
  styleUrl: "./categorie.component.scss",
})
export class CategorieComponent implements OnInit {
  playerName = "";
  id: string | null = null;
  categories: any[] = [];
  filteredCategories: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CategorieService: CategorieService,
  ) {}

  ngOnInit(): void {
    this.CategorieService.getCategories().subscribe((data: any[]) => {
      this.categories = data.map((category) => ({
        id: category.id,
        label: category.label,
      }));
      this.filteredCategories = this.categories;
    });

    this.route.params.subscribe((params) => {
      this.playerName = params["playerName"];
      this.id = params["id"];
    });
  }

  onFilteredData(filteredData: any[]) {
    this.filteredCategories = filteredData;
  }

  goToQuizz() {
    this.router.navigate(["/quizz/", this.id]);
  }
}
