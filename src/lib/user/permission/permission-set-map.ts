import { ItemResource } from '../../../core/enums/item-enums';
import { ProductResource } from '../../../core/enums/product-enums';
import { ProductSetResource } from '../../../core/enums/product-set-enums';
import { Condition } from '../condition';
import { PermissionAction } from '../user-enums';
import { Permission } from './permission';
import { PermissionSet } from './permission-set';

export const itemResourcesWithoutPaidCost = Object.values(ItemResource).filter(
  (resource) => resource !== ItemResource.PaidCost
);

export function constructPermission(
  permissionAction: PermissionAction,
  resources: (ItemResource | ProductResource | ProductSetResource)[],
  accessMarkers: string[]
) {
  const permission = new Permission(
    `${permissionAction} ${JSON.stringify(resources)} - ${JSON.stringify(
      accessMarkers
    )} `,
    permissionAction,
    resources,
    new Condition(accessMarkers)
  );
  return permission;
}

export function constructGlobalAdminPermissionSet(
  desiredUUId: string,
  accessMarkers: string[],
  defaultCreateAccessMarkers: string[]
) {
  const permissionSet = new PermissionSet(
    desiredUUId,
    [
      constructPermission(
        PermissionAction.Create,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        accessMarkers
      ),
      constructPermission(
        PermissionAction.Edit,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        accessMarkers
      ),
      constructPermission(
        PermissionAction.Delete,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        accessMarkers
      ),
      constructPermission(
        PermissionAction.View,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        accessMarkers
      ),
    ],
    constructPermission(
      PermissionAction.Create,
      [
        ...Object.values(ItemResource),
        ...Object.values(ProductResource),
        ...Object.values(ProductSetResource),
      ],
      defaultCreateAccessMarkers
    )
  );
  return permissionSet;
}

export function constructAdminPermissions(
  desiredUUId: string,
  fullAccessMarkers: string[],
  restrictedAccessMarkers: string[]
) {
  const permissionSet = new PermissionSet(
    desiredUUId,
    [
      constructPermission(
        PermissionAction.Create,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        fullAccessMarkers
      ),
      constructPermission(
        PermissionAction.Edit,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        fullAccessMarkers
      ),
      constructPermission(
        PermissionAction.Delete,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        fullAccessMarkers
      ),
      constructPermission(
        PermissionAction.View,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        fullAccessMarkers
      ),
      constructPermission(
        PermissionAction.View,
        [
          ...itemResourcesWithoutPaidCost,
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        restrictedAccessMarkers
      ),
    ],
    constructPermission(
      PermissionAction.Create,
      [
        ...Object.values(ItemResource),
        ...Object.values(ProductResource),
        ...Object.values(ProductSetResource),
      ],
      fullAccessMarkers
    )
  );
  return permissionSet;
}

export function constructEditorPermissions(
  desiredUUId: string,
  ownVendorPartnerAccessMarkers: string[],
  otherAccessMarkers: string[]
) {
  const permissionSet = new PermissionSet(
    desiredUUId,
    [
      constructPermission(
        PermissionAction.Create,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        ownVendorPartnerAccessMarkers
      ),
      constructPermission(
        PermissionAction.Edit,
        [
          ...itemResourcesWithoutPaidCost,
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        ownVendorPartnerAccessMarkers
      ),
      constructPermission(
        PermissionAction.View,
        [
          ...itemResourcesWithoutPaidCost,
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        ownVendorPartnerAccessMarkers
      ),
      constructPermission(
        PermissionAction.View,
        [
          ...itemResourcesWithoutPaidCost,
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        otherAccessMarkers
      ),
    ],
    constructPermission(
      PermissionAction.Create,
      [
        ...Object.values(ItemResource),
        ...Object.values(ProductResource),
        ...Object.values(ProductSetResource),
      ],
      ownVendorPartnerAccessMarkers
    )
  );
  return permissionSet;
}

export function constructCreatorPermissions(
  desiredUUId: string,
  ownVendorPartnerAccessMarkers: string[],
  otherAccessMarkers: string[]
) {
  const permissionSet = new PermissionSet(
    desiredUUId,
    [
      constructPermission(
        PermissionAction.Create,
        [
          ...Object.values(ItemResource),
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        ownVendorPartnerAccessMarkers
      ),
      constructPermission(
        PermissionAction.View,
        [
          ...itemResourcesWithoutPaidCost,
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        ownVendorPartnerAccessMarkers
      ),
      constructPermission(
        PermissionAction.View,
        [
          ...itemResourcesWithoutPaidCost,
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        otherAccessMarkers
      ),
    ],
    constructPermission(
      PermissionAction.Create,
      [
        ...Object.values(ItemResource),
        ...Object.values(ProductResource),
        ...Object.values(ProductSetResource),
      ],
      ownVendorPartnerAccessMarkers
    )
  );
  return permissionSet;
}

export function constructViewerPermissions(
  desiredUUId: string,
  ownVendorPartnerAccessMarkers: string[],
  otherAccessMarkers: string[]
) {
  const permissionSet = new PermissionSet(
    desiredUUId,
    [
      constructPermission(
        PermissionAction.View,
        [
          ...itemResourcesWithoutPaidCost,
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        ownVendorPartnerAccessMarkers
      ),
      constructPermission(
        PermissionAction.View,
        [
          ...itemResourcesWithoutPaidCost,
          ...Object.values(ProductResource),
          ...Object.values(ProductSetResource),
        ],
        otherAccessMarkers
      ),
    ],
    null
  );
  return permissionSet;
}

export const permissionSetIdToPermissionSet = new Map<string, PermissionSet>([
  [
    // global admin CW - google instance
    '2b400d54-9ac7-4ea3-b0e3-0000aaaaaaa9',
    constructGlobalAdminPermissionSet(
      '2b400d54-9ac7-4ea3-b0e3-0000aaaaaaa9',
      ['a0706f0c::CW', 'a0706f0c::CBRE', 'a0706f0c::GOOGLE', 'a0706f0c::OWP'],
      ['a0706f0c::CW']
    ),
  ],
  [
    // global admin Google  - google instance
    '40beda48-8b91-4751-b7d7-0000aaaaaaa5',
    constructGlobalAdminPermissionSet(
      '40beda48-8b91-4751-b7d7-0000aaaaaaa5',
      ['a0706f0c::CW', 'a0706f0c::CBRE', 'a0706f0c::GOOGLE', 'a0706f0c::OWP'],
      ['a0706f0c::GOOGLE']
    ),
  ],
  [
    // global admin CBRE  - google instance
    '65d91c72-ef42-4cdd-ace0-0000aaaaaaa7',
    constructGlobalAdminPermissionSet(
      '65d91c72-ef42-4cdd-ace0-0000aaaaaaa7',
      ['a0706f0c::CW', 'a0706f0c::CBRE', 'a0706f0c::GOOGLE', 'a0706f0c::OWP'],
      ['a0706f0c::CBRE']
    ),
  ],
  [
    // admin CW  - google instance
    '65d91c72-ef42-4cdd-ace0-0001aaaaaaa9',
    constructAdminPermissions(
      '65d91c72-ef42-4cdd-ace0-0001aaaaaaa9',
      ['a0706f0c::CW'],
      ['a0706f0c::CBRE', 'a0706f0c::GOOGLE', 'a0706f0c::OWP']
    ),
  ],
  [
    // admin OWP  - google instance
    '65d91c72-ef42-4cdd-ace0-0001aaaaaaa3',
    constructAdminPermissions(
      '65d91c72-ef42-4cdd-ace0-0001aaaaaaa3',
      ['a0706f0c::OWP'],
      ['a0706f0c::CBRE', 'a0706f0c::GOOGLE', 'a0706f0c::CW']
    ),
  ],
  [
    // admin CBRE  - google instance
    '65d91c72-ef42-4cdd-ace0-0001aaaaaaa7',
    constructAdminPermissions(
      '65d91c72-ef42-4cdd-ace0-0001aaaaaaa7',
      ['a0706f0c::CBRE'],
      ['a0706f0c::CW', 'a0706f0c::GOOGLE', 'a0706f0c::OWP']
    ),
  ],
  [
    // editor CW  - google instance
    '65d91c72-ef42-4cdd-ace0-0002aaaaaaa9',
    constructEditorPermissions(
      '65d91c72-ef42-4cdd-ace0-0002aaaaaaa9',
      ['a0706f0c::CW'],
      ['a0706f0c::CBRE', 'a0706f0c::GOOGLE', 'a0706f0c::OWP']
    ),
  ],
  [
    // editor OWP  - google instance
    '65d91c72-ef42-4cdd-ace0-0002aaaaaaa3',
    constructEditorPermissions(
      '65d91c72-ef42-4cdd-ace0-0002aaaaaaa3',
      ['a0706f0c::OWP'],
      ['a0706f0c::CBRE', 'a0706f0c::GOOGLE', 'a0706f0c::CW']
    ),
  ],
  [
    // editor CBRE  - google instance
    '65d91c72-ef42-4cdd-ace0-0002aaaaaaa7',
    constructEditorPermissions(
      '65d91c72-ef42-4cdd-ace0-0002aaaaaaa7',
      ['a0706f0c::CBRE'],
      ['a0706f0c::CW', 'a0706f0c::GOOGLE', 'a0706f0c::OWP']
    ),
  ],
  [
    // creator CW  - google instance
    '65d91c72-ef42-4cdd-ace0-0003aaaaaaa9',
    constructCreatorPermissions(
      '65d91c72-ef42-4cdd-ace0-0003aaaaaaa9',
      ['a0706f0c::CW'],
      ['a0706f0c::CBRE', 'a0706f0c::GOOGLE', 'a0706f0c::OWP']
    ),
  ],
  [
    // creator OWP  - google instance
    '65d91c72-ef42-4cdd-ace0-0003aaaaaaa3',
    constructCreatorPermissions(
      '65d91c72-ef42-4cdd-ace0-0003aaaaaaa3',
      ['a0706f0c::OWP'],
      ['a0706f0c::CBRE', 'a0706f0c::GOOGLE', 'a0706f0c::CW']
    ),
  ],
  [
    // creator Google  - google instance
    '65d91c72-ef42-4cdd-ace0-0003aaaaaaa5',
    constructCreatorPermissions(
      '65d91c72-ef42-4cdd-ace0-0003aaaaaaa5',
      ['a0706f0c::GOOGLE'],
      ['a0706f0c::CW', 'a0706f0c::CBRE', 'a0706f0c::OWP']
    ),
  ],
  [
    // creator CBRE  - google instance
    '65d91c72-ef42-4cdd-ace0-0003aaaaaaa7',
    constructCreatorPermissions(
      '65d91c72-ef42-4cdd-ace0-0003aaaaaaa7',
      ['a0706f0c::CBRE'],
      ['a0706f0c::CW', 'a0706f0c::GOOGLE', 'a0706f0c::OWP']
    ),
  ],
  [
    // viewer CW  - google instance
    '65d91c72-ef42-4cdd-ace0-0004aaaaaaa9',
    constructViewerPermissions(
      '65d91c72-ef42-4cdd-ace0-0004aaaaaaa9',
      ['a0706f0c::CW'],
      ['a0706f0c::CBRE']
    ),
  ],
  [
    // viewer CBRE  - google instance
    '65d91c72-ef42-4cdd-ace0-0004aaaaaaa7',
    constructViewerPermissions(
      '65d91c72-ef42-4cdd-ace0-0004aaaaaaa7',
      ['a0706f0c::CBRE'],
      ['a0706f0c::CW']
    ),
  ],
  [
    // global admin CW - rheaply playground instance
    '2b3dad31-392c-483b-bef5-0000aaaaaaa9',
    constructGlobalAdminPermissionSet(
      '2b3dad31-392c-483b-bef5-0000aaaaaaa9',
      ['36456721::CW', '36456721::CBRE', '36456721::GOOGLE', '36456721::OWP'],
      ['36456721::CW']
    ),
  ],
  [
    // global admin CBRE  - rheaply playground instance
    'd4c33058-3786-46ce-b003-85887044bcb1',
    constructGlobalAdminPermissionSet(
      'd4c33058-3786-46ce-b003-85887044bcb1',
      ['36456721::CW', '36456721::CBRE', '36456721::GOOGLE', '36456721::OWP'],
      ['36456721::CBRE']
    ),
  ],
  [
    // admin CW  - rheaply playground instance
    '5c7f3c23-ded3-45cd-9ad0-193acd0a1a07',
    constructAdminPermissions(
      '5c7f3c23-ded3-45cd-9ad0-193acd0a1a07',
      ['36456721::CW'],
      ['36456721::CBRE', '36456721::GOOGLE', '36456721::OWP']
    ),
  ],
  [
    // admin CBRE  - rheaply playground instance
    '054081ac-ce62-4ee0-9fa9-d40413b3ca5f',
    constructAdminPermissions(
      '054081ac-ce62-4ee0-9fa9-d40413b3ca5f',
      ['36456721::CBRE'],
      ['36456721::CW', '36456721::GOOGLE', '36456721::OWP']
    ),
  ],
  [
    // editor CW  - rheaply playground instance
    '2739d945-4ad2-44f4-af14-f8a13b3c66f0',
    constructEditorPermissions(
      '2739d945-4ad2-44f4-af14-f8a13b3c66f0',
      ['36456721::CW'],
      ['36456721::CBRE', '36456721::GOOGLE', '36456721::OWP']
    ),
  ],
  [
    // editor CBRE  - rheaply playground instance
    'bde432d5-ad2a-4807-9067-1317fba98e43',
    constructEditorPermissions(
      'bde432d5-ad2a-4807-9067-1317fba98e43',
      ['36456721::CBRE'],
      ['36456721::CW', '36456721::GOOGLE', '36456721::OWP']
    ),
  ],
  [
    // creator CW  - rheaply playground instance
    '93573d91-0898-459d-8b94-c2771a6a855f',
    constructCreatorPermissions(
      '93573d91-0898-459d-8b94-c2771a6a855f',
      ['36456721::CW'],
      ['36456721::CBRE', '36456721::GOOGLE', '36456721::OWP']
    ),
  ],
  [
    // creator CBRE  - rheaply playground instance
    'c27de5fb-c8c9-4f24-aa04-13852f3a4eb6',
    constructCreatorPermissions(
      'c27de5fb-c8c9-4f24-aa04-13852f3a4eb6',
      ['36456721::CBRE'],
      ['36456721::CW', '36456721::GOOGLE', '36456721::OWP']
    ),
  ],
  [
    // viewer CW  - rheaply playground instance
    '576efcc4-0a5a-41ae-9dcc-6e56ee54d7ab',
    constructViewerPermissions(
      '576efcc4-0a5a-41ae-9dcc-6e56ee54d7ab',
      ['36456721::CW'],
      ['36456721::CBRE']
    ),
  ],
  [
    // viewer CBRE  - rheaply playground instance
    '41eb99d9-4c6b-4912-a702-095e288a37f7',
    constructViewerPermissions(
      '41eb99d9-4c6b-4912-a702-095e288a37f7',
      ['36456721::CBRE'],
      ['36456721::CW']
    ),
  ],
]);
