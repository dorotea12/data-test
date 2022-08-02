import { EntityResource } from '../../../types/entity-resource';
import { Condition } from '../condition';
import { PermissionAction } from '../user-enums';

export class Permission {
  constructor(
    public readonly label: string,
    public readonly action: PermissionAction,
    public readonly resources: EntityResource[],
    public readonly condition: Condition
  ) {}
}

// export const generatePermission = (
//   propertyOverrides: Partial<Permission> = {}
// ): Permission => ({
//   label: propertyOverrides.label ?? faker.lorem.sentence(),
//   action: propertyOverrides.action ?? PermissionAction.Create,
//   resources: propertyOverrides.resources ?? [
//     ...Object.values(ItemResource),
//     ...Object.values(ProductResource),
//     ...Object.values(ProductSetResource),
//   ],
//   condition:
//     propertyOverrides.condition ??
//     <Condition>(<unknown>['a0706f0c::CW', 'a0706f0c::INSTANCE']), // TODO: better way to generate access markers
// });
