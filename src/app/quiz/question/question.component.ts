import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../shared/services/quiz/quiz.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  standalone: false
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;
  id: number = 0;

  constructor(private quizService: QuizService, private route: ActivatedRoute) { 
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.quizContent = this.quizService.getQuizContentById(this.id);
  }

  addAnswer(answer: string, questionId: number) {
    this.quizService.addAnswer(answer, questionId);
  }
}
