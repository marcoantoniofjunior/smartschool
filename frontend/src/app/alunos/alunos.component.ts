import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent {
  title = 'Alunos';

  public alunos = [
    { nome: 'Marta' },
    { nome: 'Paula' },
    { nome: 'Laura' },
    { nome: 'Luiza' },
    { nome: 'Lucas' },
    { nome: 'Pedro' },
    { nome: 'Paulo' },
  ];
}
