import { ItemResource } from '../core/enums/item-enums';
import { ProductResource } from '../core/enums/product-enums';
import { ProductSetResource } from '../core/enums/product-set-enums';

export type EntityResource =
  | ItemResource
  | ProductResource
  | ProductSetResource;
