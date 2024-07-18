/*import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";
import { Recolhimento } from "./Recolhimento";

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  @Column()
  dataHora: Date;

  @Column()
  estado: string;

  @Column("decimal", { precision: 10, scale: 2 })
  total: number;

  @OneToMany(() => ItemPedido, itemPedido => itemPedido.pedido)
  itensPedido: ItemPedido[];

  @OneToMany(() => Recolhimento, recolhimento => recolhimento.pedido)
  recolhimentos: Recolhimento[];
}*/

import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";
import { Recolhimento } from "./Recolhimento";

export interface Pedido {
  id: number;

  cliente: Cliente;

  dataHora: Date;

  estado: string;

  total: number;

  itensPedido: ItemPedido[];

  recolhimentos: Recolhimento[];
}