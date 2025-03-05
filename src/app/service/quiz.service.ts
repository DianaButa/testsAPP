import { Injectable } from '@angular/core';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: { [key: string]: Question[] } = {
    'drept-civil': [
      {
        id: 1,
        text: 'Care dintre următoarele reprezintă un drept real principal?',
        options: [
          'Dreptul de proprietate',
          'Dreptul de creanță',
          'Dreptul de retenție',
          'Dreptul de gaj'
        ],
        correctAnswer: 0
      },
      // Adaugă mai multe întrebări aici
    ],
    'drept-penal': [
      {
        id: 1,
        text: 'Ce reprezintă legitima apărare?',
        options: [
          'O cauză care înlătură caracterul penal al faptei',
          'O circumstanță agravantă',
          'O circumstanță atenuantă',
          'O cauză de nepedepsire'
        ],
        correctAnswer: 0
      },
      // Adaugă mai multe întrebări aici
    ],
    // Adaugă întrebări pentru celelalte materii
  };

  getQuestions(subject: string): Question[] {
    return this.questions[subject] || [];
  }
}