// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Recolhimento } from "./Recolhimento";

// @Entity()
// export class Funcionario {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   nome: string;

//   @Column({ unique: true })
//   email: string;

//   @Column()
//   dataNascimento: Date;

//   @Column()
//   senha: string;

//   @OneToMany(() => Recolhimento, recolhimento => recolhimento.funcionario)
//   recolhimentos: Recolhimento[];
// }

export interface Funcionario {
  id: number;

  nome: string;

  email: string;

  dataNascimento: string;

  senha: string;

  recolhimentos: Recolhimento[];

  tipo: string
}