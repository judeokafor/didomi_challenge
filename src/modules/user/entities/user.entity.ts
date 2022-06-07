import { BaseModel } from 'src/commons/base/model';
import { Column, Entity, OneToMany } from 'typeorm';

import { TABLES } from '../../../commons/constants';

import { Consent } from '../../consent/entities/consent.entity';

@Entity(TABLES.users)
export class User extends BaseModel {
  @Column({ type: 'varchar', unique: true })
  email!: string;

  @OneToMany((_) => Consent, (consent) => consent.user)
  consents: Consent[];
}