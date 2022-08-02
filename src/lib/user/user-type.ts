import { PermissionSet } from './permission/permission-set';
import { PermittedActions } from './permission/permitted-actions';
import { UserStatus } from './user-enums';

type Creator = {
  readonly id: string;
  readonly displayName: string;
};

export class User {
  public permittedActions: PermittedActions;

  constructor(
    public readonly id: string,
    public readonly middlemanId: string,
    public readonly instanceId: string,
    public readonly status: UserStatus,
    public readonly permissionSet: PermissionSet,
    public readonly email: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly createdUserId: string,
    public readonly createdDate: Date,
    public readonly lastModifiedUserId: string,
    public readonly lastModifiedDate: Date
  ) {}

  toCreator(): Creator {
    return buildCreator(this.id, this.firstName, this.lastName);
  }
}

function buildCreator(id: string, first: string, last: string) {
  return {
    id,
    displayName: `${first} ${last}`,
  };
}
