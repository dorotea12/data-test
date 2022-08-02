import { readFileSync } from 'fs';

export function readFileFactory(
  dirname: string,
  fileType = ''
): (arg: string) => string {
  return (file: string): string =>
    readFileSync(`${dirname}/${file}.${fileType}`, 'utf-8');
}
