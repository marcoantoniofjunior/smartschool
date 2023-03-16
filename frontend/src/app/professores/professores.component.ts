import { Component } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent {
  title = 'Professores';

  public professores = [
    { id: 1, disciplina: 'Matmática', nome: 'Lauro' },
    { id: 2, disciplina: 'Física', nome: 'Marco' },
    { id: 3, disciplina: 'Português', nome: 'Ronaldo' },
    { id: 4, disciplina: 'Inglês', nome: 'Rodrigo' },
    { id: 5, disciplina: 'Programação', nome: 'Alexandre' },
  ];
}
