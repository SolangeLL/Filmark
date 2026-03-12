import { List } from 'src/lists/list.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  username: string;

  @Column({ default: false })
  isPasswordSet: boolean;

  @OneToMany(() => List, (list) => list.user, {
    cascade: true
  })
  lists: List[];

  @Column({ nullable: true })
  profilePictureName?: string;
}
