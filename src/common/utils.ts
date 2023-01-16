const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

module.exports = {
  loadTestCasesFromYamlFile(filename: string): any[] {
    return yaml.parse(fs.readFileSync(filename, { encoding: 'utf8' }));
  },
};
