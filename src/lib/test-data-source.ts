import { PostgresClient } from '../core/data-access/postgres-client';
import { MiddlemanUser } from './middleman-user/middleman-user';
import { User } from './user/user-type';

type TestDataType = User | MiddlemanUser;

export interface TestDataSource {
  generateTestData(
    propertyOverrides: Partial<TestDataType>
  ): Partial<TestDataType>;
  seedTable?(client: PostgresClient): Promise<void>;
  cleanTable?(client: PostgresClient): Promise<void>;
  disconnectDB?(client: PostgresClient): Promise<void>;
}
