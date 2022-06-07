export type DatabaseConfig = {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string[];
  migrationsTableName: string;
  migrations: string[];
  cli: {
    migrationsDir: string;
  };
  ssl: {
    rejectUnauthorized: boolean;
  };
  cache: {
    duration: number;
  };
  synchronize: boolean;
};

export type SystemConfig = {
  database: DatabaseConfig;
  isProduction: boolean;
  isDeployedApplication: boolean;
};
