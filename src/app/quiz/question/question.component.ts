import { Component, OnInit } from "@angular/core";
import { QuizService } from "../../shared/services/quiz/quiz.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"],
  standalone: false,
})
export class QuestionComponent implements OnInit {
  id: number = 0;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
  ) {
    this.route.url.subscribe((segments) => {
      const lastSegment = segments[segments.length - 1];
      this.id = +lastSegment.path; // ou .path pour le texte
    });
  }

  ngOnInit(): void {
    this.quizService.resetQuiz();

    this.quizService.getQuizContentById(this.id);
  }

  get quizContent(): any[] {
    return this.quizService.quizContent;
  }

  addAnswer(answer: string, questionId: number) {
    this.quizService.addAnswer(answer, questionId);
  }
}
