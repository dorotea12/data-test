import { getSqlFileFactory } from '../../../core/utilities/get-sql-file-factory';

const getSqlFromFile = getSqlFileFactory(__dirname);

export const saveUserSql = getSqlFromFile('save-user');
export const getUserByMiddlemanIdSql = getSqlFromFile(
  'get-user-by-middleman-id'
);
export const getUserSql = getSqlFromFile('get-user');
