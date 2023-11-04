import { Column, CreateDateColumn, DeleteDateColumn, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class UserEntity{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'first_name'})
  firstName: string;

  @Column({name: 'last_name'})
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({name: 'created_at'})
  updateAt: string

  @DeleteDateColumn({name: 'deledet_at'})
  deleteAdt: string
}