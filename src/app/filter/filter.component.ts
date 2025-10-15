import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from "@angular/core";
import Fuse from "fuse.js";

@Component({
  selector: "app-filter",
  standalone: false,
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss",
})
export class FilterComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() searchKey: string = "label";
  @Output() filteredData = new EventEmitter<any[]>();

  searchInputFilter: string = "";
  private fuse: Fuse<any> | null = null;

  ngOnInit(): void {
    this.initializeFuse();
  }

  ngOnChanges(): void {
    if (this.data && this.data.length > 0) {
      this.initializeFuse();
    }
  }

  private initializeFuse(): void {
    if (this.data && this.data.length > 0) {
      const options = {
        threshold: 0.3, // 0.0 = exact match, 1.0 = match anything
        distance: 100, // Distance maximale autorisée
        minMatchCharLength: 1, // Longueur minimale pour matcher
        ignoreLocation: true, // Ignorer la position dans le texte
        keys: [this.searchKey], // Search in the specified property
      };

      this.fuse = new Fuse(this.data, options);
    }
  }

  search() {
    if (!this.searchInputFilter.trim()) {
      this.filteredData.emit(this.data);
      return;
    }

    if (!this.fuse) {
      this.initializeFuse();
    }

    if (this.fuse) {
      const results = this.fuse.search(this.searchInputFilter);
      const filtered = results.map((result) => result.item);

      this.filteredData.emit(filtered);
    } else {
      this.filteredData.emit(this.data);
    }
  }

  reset() {
    this.searchInputFilter = "";
    this.filteredData.emit(this.data);
  }
}
