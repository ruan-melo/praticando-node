import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserExam } from "./UserExam";

@Entity("exams")
export class Exam {
  //id, name, email, password, created_at , updated_at
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @OneToMany(() => UserExam, (user_exam) => user_exam.exam)
  users_exams: UserExam[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
