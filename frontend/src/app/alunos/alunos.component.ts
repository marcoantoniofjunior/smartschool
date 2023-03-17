import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent {
  title = 'Alunos';

  public alunoSelecionado: string = '';

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 332255 },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 332242 },
    { id: 3, nome: 'Laura', sobrenome: 'Antonio', telefone: 3322558899 },
    { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 332255121 },
    { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 3322552563 },
    { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 332255478 },
    { id: 7, nome: 'Paulo', sobrenome: 'José', telefone: 332255777 },
  ];

  constructor() {}

  alunoSelect(aluno: any) {
    this.alunoSelecionado = aluno.nome;
  }

  voltar(){
    this.alunoSelecionado = '';
  }

  ngOnInit() {}
}
