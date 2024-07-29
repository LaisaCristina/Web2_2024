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

  cpf: string;

  nome: string;

  email: string;

  telefone: string;

  idEndereco: number;

  senha: string;

  tipo: string;
}