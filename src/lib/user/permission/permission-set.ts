import { Permission } from './permission';

export class PermissionSet {
  constructor(
    public readonly id: string,
    public readonly permissions: Permission[],
    public readonly defaultCreatePermission: Permission
  ) {}
}

// export const generatePermissionSet = (
//   propertyOverrides: Partial<PermissionSet> = {}
// ): PermissionSet => ({
//   id: propertyOverrides.id ?? faker.datatype.uuid(),
//   permissions: propertyOverrides.permissions ?? [generatePermission()],
//   defaultCreatePermission:
//     propertyOverrides.defaultCreatePermission ?? generatePermission(),
// });
