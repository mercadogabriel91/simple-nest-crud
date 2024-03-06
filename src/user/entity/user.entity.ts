import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @CreateDateColumn()
  createdAt: Date;

//   @Column({ nullable: true })
//   recipe: any[];
}
