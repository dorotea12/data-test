export enum PermissionAction {
  Create = "create",
  Edit = "edit",
  View = "view",
  Delete = "delete",
}

export enum PermittedAction {
  CanCreateProduct = "canCreateProduct",
  CanCreateProductSet = "canCreateProductSet",
  CanCreateItem = "canCreateItem",
  CanQuickAddItem = "canQuickAddItem",
  CanEdit = "canEdit",
  CanDelete = "canDelete",
  CanEditPaidCost = "canEditPaidCost",
}

export enum UserStatus {
  Active = "active",
  Inactive = "inactive",
}
