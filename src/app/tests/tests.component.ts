import { Component } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {
  subjects = [
    {
      id: 'drept-civil',
      name: 'Drept Civil',
      description: 'Teste din domeniul dreptului civil',
      color: '#2196F3'
    },
    {
      id: 'drept-penal',
      name: 'Drept Penal',
      description: 'Teste din domeniul dreptului penal',
      color: '#F44336'
    },
    {
      id: 'dreptul-familiei',
      name: 'Dreptul Familiei',
      description: 'Teste din domeniul dreptului familiei',
      color: '#4CAF50'
    },
    {
      id: 'drept-constitutional',
      name: 'Drept Constituțional',
      description: 'Teste din domeniul dreptului constituțional',
      color: '#9C27B0'
    }
  ];
}

