import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PecaRoupaService } from '../../services/peca-roupa.service';
import { PecaRoupa } from '../../models/PecaRoupa';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pecasForm: FormGroup;

  constructor(private fb: FormBuilder, private pecaRoupaService: PecaRoupaService) {
    this.pecasForm = this.fb.group({
      pecas: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.pecaRoupaService.getPecaRoupas().subscribe((pecasRoupas: PecaRoupa[]) => {
      console.log(pecasRoupas)
      this.addPecas(pecasRoupas);
    });
  }

  get pecas(): FormArray {
    return this.pecasForm.get('pecas') as FormArray;
  }

  addPecas(pecasRoupas: PecaRoupa[]): void {
    pecasRoupas.forEach((peca) => {
      this.pecas.push(this.fb.group({
        descricao: [peca.descricao],
        preco: [peca.preco],
        prazo: [peca.prazo],
        imagem: [peca.imagem],
        quantidade: [1]
      }));
    });
  }

  onSubmit(): void {
    console.log(this.pecasForm.value);
  }
}