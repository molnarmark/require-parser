const RequireParser = require('./index');

const testCode = `
const moduleA = require('./moduleA');
const moduleB = require('./moduleB');
const moduleC = require('./moduleC');

const fs = require('fs');
`;

const requires = RequireParser(testCode);
console.log(requires);
/* =>
[ { originalMatch: 'require(\'./moduleA\')',
    modulePath: './moduleA',
    isInstalledModule: false },
  { originalMatch: 'require(\'./moduleB\')',
    modulePath: './moduleB',
    isInstalledModule: false },
  { originalMatch: 'require(\'./moduleC\')',
    modulePath: './moduleC',
    isInstalledModule: false },
  { originalMatch: 'require(\'fs\')',
    modulePath: 'fs',
    isInstalledModule: true } ]
*/