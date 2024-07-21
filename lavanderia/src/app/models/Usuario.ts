// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "./Pedido";
/*
@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  cpf: string;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;

  @Column()
  senha: string;

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
}*/

export interface Usuario {
  id: number;

  CPF: string;

  nome: string;

  email: string;

  endereco: number;

  telefone: string;

  senha: string;

  pedidos: Pedido[];

  tipo: string;
}