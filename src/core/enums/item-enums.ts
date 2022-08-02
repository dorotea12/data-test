/* Changes to this file must be mirrored at the top of database/init-db.sql */

export enum ItemAgeUnit {
  Months = "months",
  Years = "years",
}

export enum ItemStatus {
  InUse = "in-use",
  Available = "available",
  Reserved = "reserved",
  Deleted = "deleted",
  Unspecified = "unspecified",
}

export enum ItemResource {
  AccessMarkers = "Item:accessMarkers",
  AssetTag = "Item:assetTag",
  Age = "Item:age",
  AssetNumber = "Item:assetNumber",
  Condition = "Item:condition",
  Creator = "Item:creator",
  LocationId = "Item:locationId",
  OrderNumber = "Item:orderNumber",
  PaidCost = "Item:paidCost",
  ProductId = "Item:productId",
  PurchaseDate = "Item:purchaseDate",
  QrCodeUrls = "Item:qrCodeUrls",
  Status = "Item:status",
  ManufacturedDate = "Item:manufacturedDate",
  WarrantyEndDate = "Item:warrantyEndDate",
}

export enum ItemCondition {
  Excellent = "excellent",
  Good = "good",
  Fair = "fair",
  Damaged = "damaged",
  Unspecified = "unspecified",
}

export enum ItemSearchFilterField {
  AccessMarkers = "accessMarkers",
  AssetTag = "assetTag",
  CategoryId = "categoryId",
  CategoryLabel = "categoryLabel",
  Colors = "colors",
  Condition = "condition",
  CreatedDate = "createdDate",
  CreatedUserId = "createdUserId",
  Fabrics = "fabrics",
  Finishes = "finishes",
  Id = "id",
  LocationId = "locationId",
  Manufacturer = "manufacturer",
  PaidCost = "paidCost",
  ProductCode = "productCode",
  ProductId = "productId",
  ProductLabel = "productLabel",
  PurchaseDate = "purchaseDate",
  Status = "status",
  TagIds = "tagIds",
  Uses = "uses",
  ManufacturedDate = "manufacturedDate",
}

export enum ItemSearchSortField {
  AssetNumber = "assetNumber",
  Condition = "condition",
  CreatedDate = "createdDate",
  ManufacturedDate = "manufacturedDate",
  ProductLabel = "productLabel",
  RelevanceScore = "_score",
  Status = "status",
}
