import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './modules/user/user.module';
import { ConsentModule } from './modules/consent/consent.module';

import { validate } from './config/env.validation';
import configuration from './config/system.config';
import { TypeOrmConfigService } from './config/typeorm.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: ['.env.local', '.env.development', '.env.staging', '.env'],
      validate,
    }),

    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),

    UserModule,
    ConsentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
