import { Column, BeforeInsert, CreateDateColumn, DeleteDateColumn, Generated, PrimaryGeneratedColumn, UpdateDateColumn, Entity } from "typeorm";
import { hash } from 'bcrypt';

@Entity({name: 'Users'})
export class UserEntity{

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'first_name'})
  firstName: string;

  @Column({name: 'last_name'})
  lastName: string;

  @Column()
  email: string;

  @Column({name: 'password_hash'})
  passwordHash: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({name: 'updated_at'})
  updateAt: string;

  @DeleteDateColumn({name: 'deledet_at'})
  deleteAdt: string;

}