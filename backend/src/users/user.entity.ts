import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  @Column({ nullable: true })
  profilePictureName?: string;
}
