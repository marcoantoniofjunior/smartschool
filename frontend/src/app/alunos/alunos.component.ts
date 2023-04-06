import { Component } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent {
  public alunoForm: FormGroup;
  title = 'Alunos';
  public alunoSelecionado: Aluno | undefined;
  public textSimple: string = '';

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 332255 },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 332242 },
    { id: 3, nome: 'Laura', sobrenome: 'Antonio', telefone: 3322558899 },
    { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 332255121 },
    { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 3322552563 },
    { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 332255478 },
    { id: 7, nome: 'Paulo', sobrenome: 'José', telefone: 332255777 },
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  ngOnInit() {}

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = undefined;
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }
}
