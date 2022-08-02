import { readFileFactory } from "./read-file-factory";

export function getSqlFileFactory(dirname: string): (string) => string {
  return readFileFactory(dirname, "sql");
}
