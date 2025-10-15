import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import Fuse from "fuse.js";

@Component({
  selector: "app-filter",
  standalone: false,
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss",
})
export class FilterComponent implements OnInit {
  @Input() data: string[] = [];
  @Output() filteredData = new EventEmitter<string[]>();

  searchInputFilter: string = "";
  private fuse!: Fuse<string>;

  ngOnInit(): void {
    // Configuration de Fuse.js pour la recherche approximative
    const options = {
      threshold: 0.4, // 0.0 = exact match, 1.0 = match anything
      distance: 100, // Distance maximale autorisée
      minMatchCharLength: 2, // Longueur minimale pour matcher
      ignoreLocation: true, // Ignorer la position dans le texte
    };

    this.fuse = new Fuse(this.data, options);
  }

  search() {
    if (!this.searchInputFilter.trim()) {
      this.filteredData.emit(this.data);
      return;
    }

    const results = this.fuse.search(this.searchInputFilter);
    const filtered = results.map((result) => result.item);

    this.filteredData.emit(filtered);
  }

  reset() {
    this.searchInputFilter = "";
    this.filteredData.emit(this.data);
  }
}
