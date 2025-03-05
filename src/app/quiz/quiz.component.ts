import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question, QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex = 0;
  selectedAnswers: number[] = [];
  showResults = false;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    const subject = this.route.snapshot.paramMap.get('subject') || '';
    this.questions = this.quizService.getQuestions(subject);
    this.selectedAnswers = new Array(this.questions.length).fill(-1);
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get progress(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  onAnswerSelected(answerIndex: number) {
    this.selectedAnswers[this.currentQuestionIndex] = answerIndex;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResults = true;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  getCorrectAnswersCount(): number {
    return this.selectedAnswers.reduce((count, answer, index) => {
      return count + (answer === this.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  }

  isAnswerCorrect(questionIndex: number): boolean {
    return this.selectedAnswers[questionIndex] === this.questions[questionIndex].correctAnswer;
  }
}
