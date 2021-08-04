import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { Exam } from "./Exam";

@Entity("users_exams")
export class UserExam {
  //id, name, email, password, created_at , updated_at
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  score: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => Exam)
  @JoinColumn({ name: "exam_id" })
  exam: Exam;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
