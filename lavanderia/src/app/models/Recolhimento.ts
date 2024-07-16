// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Pedido } from "./Pedido";
import { Funcionario } from "./Funcionario";

// @Entity()
// export class Recolhimento {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => Pedido, pedido => pedido.recolhimentos)
//   pedido: Pedido;

//   @ManyToOne(() => Funcionario, funcionario => funcionario.recolhimentos)
//   funcionario: Funcionario;

//   @Column()
//   dataHora: Date;
// }

export interface Recolhimento {
  id: number;
  pedido: Pedido;
  funcionario: Funcionario;
  dataHora: Date;
}