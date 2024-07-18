// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Pedido } from "./Pedido";
import { PecaRoupa } from "./PecaRoupa";

// @Entity()
// export class ItemPedido {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ManyToOne(() => Pedido, pedido => pedido.itensPedido)
//   pedido: Pedido;

//   @ManyToOne(() => PecaRoupa, pecaRoupa => pecaRoupa.itensPedido)
//   pecaRoupa: PecaRoupa;

//   @Column()
//   quantidade: number;

//   @Column("decimal", { precision: 10, scale: 2 })
//   precoUnitario: number;
// }

export interface ItemPedido {
  id: number;

  pedido: Pedido;

  pecaRoupa: PecaRoupa;

  quantidade: number;

  precoUnitario: number;
}