export interface PostgresClientConfig {
  database: string;
  host: string;
  idleTimeoutMilliseconds?: number;
  maxClients?: number;
  password?: string;
  port?: number;
  statementTimeoutMilliseconds?: number;
  user?: string;
}
