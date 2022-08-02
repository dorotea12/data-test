import { PermittedAction } from '../user-enums';

/**
 * This type is used to communicate the user's permitted actions to the user.
 */
export type PermittedActions = { readonly [key in PermittedAction]?: boolean };

export const generatePermittedActions = (): PermittedActions => ({
  [PermittedAction.CanCreateItem]: true,
  [PermittedAction.CanCreateProduct]: true,
  [PermittedAction.CanCreateProductSet]: true,
});
