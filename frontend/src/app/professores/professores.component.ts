import { Component } from '@angular/core';
import { Professor } from '../models/professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent {

  title = 'Professores';
  public professorSelecionado: Professor | undefined ;
  public professorForm: FormGroup;

  public professores = [
    { id: 1, disciplina: 'Matmática', nome: 'Lauro' },
    { id: 2, disciplina: 'Física', nome: 'Marco' },
    { id: 3, disciplina: 'Português', nome: 'Ronaldo' },
    { id: 4, disciplina: 'Inglês', nome: 'Rodrigo' },
    { id: 5, disciplina: 'Programação', nome: 'Alexandre' },
  ];

  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.createForm();
  }

  createForm(){
    this.professorForm = this.fb.group({
      nome:['', Validators.required],
      disciplina:['', Validators.required]
    });
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar(){
    this.professorSelecionado = undefined;
  }

  professorSubmit(){
    console.log(this.professorForm.value)
  }



}
