import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  icon: string;

  @Column('simple-array', { nullable: true, array: true })
  films: string[];

  @ManyToOne(() => User, (user) => user.lists)
  user: User;
}
