import { Component } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent {
  title = 'Professores';

  public professores = [
    { nome: 'Lauro' },
    { nome: 'Marco' },
    { nome: 'Ronaldo' },
    { nome: 'Rodrigo' },
    { nome: 'Alexandre' },
  ];
}
