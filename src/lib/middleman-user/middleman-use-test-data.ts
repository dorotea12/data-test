import { faker } from '@faker-js/faker';
import { TestDataSource } from '../test-data-source';
import { UserStatus } from '../user/user-enums';
import { MiddlemanUser } from './middleman-user';

export class MiddlemanUserTestData implements TestDataSource {
  generateTestData(
    propertyOverrides: Partial<MiddlemanUser> = {}
  ): Partial<MiddlemanUser> {
    return {
      id: propertyOverrides.id ?? faker.datatype.uuid(),
      organizationIds: propertyOverrides.organizationIds ?? [
        faker.datatype.uuid(),
        faker.datatype.uuid(),
      ],
      applicationIds: propertyOverrides.organizationIds ?? [
        faker.datatype.uuid(),
        faker.datatype.uuid(),
      ],
      email: propertyOverrides.email ?? faker.internet.email(),
      firstName: propertyOverrides.firstName ?? faker.name.firstName(),
      lastName: propertyOverrides.lastName ?? faker.name.lastName(),
      status: propertyOverrides.status ?? UserStatus.Active,
      lastModifiedUserId:
        propertyOverrides.lastModifiedUserId ?? faker.datatype.uuid(),
      lastModifiedDate:
        propertyOverrides.lastModifiedDate ?? faker.date.recent().toISOString(),
    };
  }
}
