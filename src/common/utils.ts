import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

export function loadTestCases(directory: string): any[] {
  const filename = path.join(directory, 'test_cases.yml');
  return yaml.parse(fs.readFileSync(filename, { encoding: 'utf8' }));
}
