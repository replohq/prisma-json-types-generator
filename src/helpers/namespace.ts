import { readFileSync } from 'fs';
import path from 'path';

export function createNamespace(nsName: string) {
  return readFileSync(path.resolve(__dirname, 'namespace.template.ts'))
    .toString()
    .replace('__name__', nsName)
    .trim();
}
