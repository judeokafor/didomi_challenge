import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConsentService } from './consent.service';
import { ConsentController } from './consent.controller';

import { Consent } from './entities/consent.entity';
import { User } from '../user/entities/user.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Consent, User]), UserModule],
  controllers: [ConsentController],
  providers: [ConsentService],
})
export class ConsentModule {}
