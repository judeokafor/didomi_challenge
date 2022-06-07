import { Column, Entity, ManyToOne } from 'typeorm';

import { TABLES } from '../../../commons/constants';
import { User } from 'src/modules/user/entities/user.entity';
import { BaseModel } from 'src/commons/base/model';

export enum CONSENT_TYPE {
  EMAIL_NOTIFICATIONS = 'email_notifications',
  SMS_NOTIFICATIONS = 'sms_notifications',
}

@Entity(TABLES.consents)
export class Consent extends BaseModel {
  @Column({ type: 'boolean', default: false })
  enabled: boolean;

  @Column({ type: 'enum', enum: CONSENT_TYPE })
  type: CONSENT_TYPE;

  @ManyToOne(() => User, (user) => user.consents)
  user: User;
}
