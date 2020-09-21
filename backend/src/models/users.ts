import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm'

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column({unique:true})
  username: string;
  @Column({unique:true})
  email: string;
  @Column()
  password: string;
}