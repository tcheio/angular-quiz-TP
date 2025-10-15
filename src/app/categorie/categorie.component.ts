import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-categorie',
  standalone: false,
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss'
})
export class CategorieComponent {

  playerName = '';
  id = null;

  constructor(private route: ActivatedRoute, private router: Router,) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.playerName = params['playerName'];
      this.id = params['id'];
    });
  }

  goToQuizz() {
    this.router.navigate(['/quizz/', this.id]);
  }

}
