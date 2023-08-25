const fs = require('fs');
const path = require('path');
const os = require('os');

function installPostCommit() {
  const hook = scriptPathSelector();
  const destinyPath = path.join(__dirname, '../../.git/hooks/post-commit');
  fs.copyFileSync(hook, destinyPath);
}

/** Select the correct script path acording to the OS */
function scriptPathSelector() {
  const isMac = os.type() === 'Darwin';
  const hookFolder = isMac ? 'post-comit-mac' : 'post-commit-others';
  return path.join(__dirname, `./hooks/${hookFolder}/post-commit`);
}

function initEnvsHealth() {
  const fullFile = path.join(__dirname, '../../src/appConfig/health/envsData.ts');
  const file = 'export const envsData= {}';
  fs.writeFile(fullFile, file, (err) => {
    if (err) throw err;
    console.log('Envs de version creado en ->', fullFile);
  });
}

async function main() {
  await installPostCommit();
  await initEnvsHealth();
  console.log(`
  '+-----------+'
  '| H O O K S |'
  '+-----------+'
  `);
}

main();
