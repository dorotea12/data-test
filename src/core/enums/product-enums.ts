/* Changes to this file must be mirrored at the top of database/init-db.sql */

export enum ProductPerformance {
  High = "high",
  Medium = "medium",
  Low = "low",
}

export enum ProductStatus {
  Active = "active",
  Inactive = "inactive",
}

export enum ProductResource {
  Label = "Product:label",
  ProductCodePrefix = "Product:productCodePrefix",
  ProductCodeNumber = "Product:productCodeNumber",
  ProductCode = "Product:productCode",
  Description = "Product:description",
  ImageFileIds = "Product:imageFileIds",
  CategoryId = "Product:categoryId",
  Creator = "Product:creator",
  Status = "Product:status",
  ItemsPerPackage = "Product:itemsPerPackage",
  Performance = "Product:performance",
  Measurements = "Product:measurements",
  TagIds = "Product:tagIds",
  Uses = "Product:uses",
  Colors = "Product:colors",
  Fabrics = "Product:fabrics",
  Finishes = "Product:finishes",
  Materials = "Product:materials",
  ProductAreas = "Product:productAreas",
  Manufacturer = "Product:manufacturer",
  Note = "Product:note",
  AdditionalFileIds = "Product:additionalFileIds",
  TotalItems = "Product:totalItems",
  ItemStatusCounts = "Product:itemStatusCounts",
  ItemConditionCounts = "Product:itemConditionCounts",
  AccessMarkers = "Product:accessMarkers",
  WarrantyLength = "Product:warrantyLength",
}

export enum ProductSearchFilterField {
  ProductSetCreationContext = "productSetCreationContext",
  AccessMarkers = "accessMarkers",
  CreatedUserId = "createdUserId",
  Label = "label",
  ProductCode = "productCode",
  Uses = "uses",
  Colors = "colors",
  TagIds = "tagIds",
  Finishes = "finishes",
  Id = "id",
  Materials = "materials",
  Fabrics = "fabrics",
  ProductAreas = "productAreas",
  // the product search filter uses manufacturers instead of manufacturer (as the entity property is named) so that products and productsets can both be searched using the same filter
  Manufacturers = "manufacturers",
  Status = "status",
  CategoryId = "categoryId",
}

export enum ProductSearchSortField {
  CategoryLabel = "categoryLabel",
  CreatedDate = "createdDate",
  ItemsAvailable = "itemStatusCounts.available",
  ItemsInUse = "itemStatusCounts.in-use",
  ItemsReserved = "itemStatusCounts.reserved",
  Label = "label",
  ProductCode = "productCode",
  RelevanceScore = "_score",
}
