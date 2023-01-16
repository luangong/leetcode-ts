const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

module.exports = {
  loadTestCases(directory: string): any[] {
    const filename = path.join(directory, 'test_cases.yml');
    return yaml.parse(fs.readFileSync(filename, { encoding: 'utf8' }));
  },
};
