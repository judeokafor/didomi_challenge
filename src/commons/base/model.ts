import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

export class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}
