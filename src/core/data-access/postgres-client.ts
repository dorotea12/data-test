import { Pool } from 'pg';
import { DataAccessError } from './data-access-error';
import { PostgresClientConfig } from './postgres-client-config';

export class PostgresClient {
  constructor(config: PostgresClientConfig) {
    this.pool = new Pool({
      host: config.host,
      database: config.database,
      port: config.port,
      user: config.user,
      password: config.password,
      max: config.maxClients,
      idleTimeoutMillis: config.idleTimeoutMilliseconds,
      statement_timeout: config.statementTimeoutMilliseconds,
    });
  }

  private readonly pool: Pool;

  public async query<T>(
    sqlText: string,
    parameters?: readonly unknown[]
  ): Promise<readonly T[]> {
    try {
      const { rows } = await this.pool.query<T>(sqlText, parameters);
      return rows as readonly T[];
    } catch (error) {
      throw new DataAccessError(
        `Failed to execute query: ${sqlText} with params: ${parameters} with error ${error}`
      );
    }
  }

  public async disconnect(): Promise<void> {
    await this.pool.end();
  }
}
