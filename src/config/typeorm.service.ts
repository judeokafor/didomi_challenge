import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('PG_HOST'),
      port: this.config.get<number>('PG_PORT'),
      database: this.config.get<string>('PG_DATABASE'),
      username: this.config.get<string>('PG_USER'),
      password: this.config.get<string>('PG_PASSWORD'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      logger: 'file',
      autoLoadEntities: true,
      synchronize: !this.config.get<boolean>('isProduction'),
      cache: {
        duration: 60000, // 60 seconds
      },
      cli: {
        migrationsDir: 'src/migration',
      },
      ssl: !this.config.get<boolean>('isDeployedApplication')
        ? false
        : {
            rejectUnauthorized: this.config.get<boolean>(
              'isDeployedApplication',
            ),
          },
    };
  }
}
