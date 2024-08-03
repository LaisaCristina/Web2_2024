// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ItemPedido } from "./ItemPedido";

// @Entity()
// export class PecaRoupa {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   descricao: string;

//   @Column("decimal", { precision: 10, scale: 2 })
//   preco: number;

//   @Column()
//   prazo: number;

//   @OneToMany(() => ItemPedido, itemPedido => itemPedido.pecaRoupa)
//   itensPedido: ItemPedido[];
// }

export interface PecaRoupa {
  id: number;

  descricao: string;

  preco: number;

  prazo: number;

  imagem: string;

}