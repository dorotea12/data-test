import { faker } from '@faker-js/faker';
import { PostgresClient } from '../../core/data-access/postgres-client';
import { TestDataSource } from '../test-data-source';
import { permissionSetIdToPermissionSet } from './permission/permission-set-map';
import { saveUserSql } from './queries';
import { UserStatus } from './user-enums';
import { User } from './user-type';

const globalAdminCWPermissions = '2b400d54-9ac7-4ea3-b0e3-0000aaaaaaa9';

export class UserTestData implements TestDataSource {
  generateTestData(propertyOverrides: Partial<User> = {}): Partial<User> {
    return new User(
      propertyOverrides.id ?? faker.datatype.uuid(),
      propertyOverrides.middlemanId ?? faker.datatype.uuid(),
      propertyOverrides.instanceId ?? faker.datatype.uuid(),
      propertyOverrides.status ?? UserStatus.Active,
      propertyOverrides.permissionSet ??
        permissionSetIdToPermissionSet.get(globalAdminCWPermissions), // TODO: create permissions
      propertyOverrides.email ?? faker.internet.email(),
      propertyOverrides.firstName ?? faker.name.firstName(),
      propertyOverrides.lastName ?? faker.name.lastName(),
      propertyOverrides.createdUserId ?? faker.datatype.uuid(),
      propertyOverrides.createdDate ?? faker.date.past(1),
      propertyOverrides.lastModifiedUserId ?? faker.datatype.uuid(),
      propertyOverrides.lastModifiedDate ?? faker.date.recent()
    );
  }

  async seedTable(client: PostgresClient): Promise<void> {
    const seedUser = this.generateTestData();
    await client.query('TRUNCATE TABLE users CASCADE;');
    await client.query(saveUserSql, [seedUser]);
  }

  // TODO: clean table

  async disconnectDB(client: PostgresClient): Promise<void> {
    await client.disconnect();
  }
}
