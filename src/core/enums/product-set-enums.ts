export enum ProductSetStatus {
  Active = "active",
  Inactive = "inactive",
}

export enum ProductSetResource {
  AdditionalFileIds = "ProductSet:additionalFileIds",
  CategoryId = "ProductSet:categoryId",
  Colors = "ProductSet:colors",
  Creator = "ProductSet:creator",
  Description = "ProductSet:description",
  Fabrics = "ProductSet:fabrics",
  Finishes = "ProductSet:finishes",
  Height = "ProductSet:height",
  ImageFileIds = "ProductSet:imageFileIds",
  Label = "ProductSet:label",
  Length = "ProductSet:length",
  Manufacturers = "ProductSet:manufacturers",
  Materials = "ProductSet:materials",
  MemberProducts = "ProductSet:memberProducts",
  Note = "ProductSet:note",
  Performance = "ProductSet:performance",
  ProductAreas = "ProductSet:productAreas",
  ProductCode = "ProductSet:productCode",
  ProductCodeNumber = "ProductSet:productCodeNumber",
  ProductCodePrefix = "ProductSet:productCodePrefix",
  Status = "ProductSet:status",
  TagIds = "ProductSet:tagIds",
  Uses = "ProductSet:uses",
  Volume = "ProductSet:volume",
  Weight = "ProductSet:weight",
  Width = "ProductSet:width",
  AccessMarkers = "ProductSet:accessMarkers",
  EstimatedCount = "ProductSet:estimatedCount",
}

export enum ProductSetSearchFilterField {
  AccessMarkers = "accessMarkers",
  CreatedUserId = "createdUserId",
  Id = "id",
  Status = "status",
  Manufacturers = "manufacturers",
  CategoryId = "categoryId",
  MemberProductId = "memberProducts.memberProductId",
}

export enum ProductSetSearchSortField {
  Category = "categoryLabel",
  CreationDate = "createdDate",
  Label = "label",
  Performance = "performance",
  ProductCode = "productCode",
  RelevanceScore = "_score",
}
