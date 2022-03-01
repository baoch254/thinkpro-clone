import * as fg from 'fast-glob';
import * as fs from 'fs';
import * as path from 'path';

function createEntitiesIndex() {
  console.log(process.env.ENV_PROJECT);
  console.log('Creating entity-index.ts for thinkpro-api app');

  const project = process.env.ENV_PROJECT || 'thinkpro-api';

  const pathLibScan = `${path.dirname(__dirname)}/libs/${project}`;
  const pathApp = `${path.dirname(__dirname)}/apps/${project}/src`;

  if (!fs.existsSync(pathApp)) {
    console.log(`App thinkpro-api cannot be found. Path not exist: ${pathApp}`);
    process.exit(1);
  }
  const outDir = `${pathApp}/database`;
  const tmpFile = `${outDir}/tmp-entities-index.ts`;
  const outFile = `${outDir}/entities-index.ts`;

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  for (const item of fg.sync(`${pathLibScan}/**/entities/*.entity.ts`)) {
    const filePath = path.relative(outDir, item).replace(/\.ts$/, '');
    const data = `export * from '${filePath}';\n`;
    fs.writeFileSync(tmpFile, data, { flag: 'a+' });
  }

  if (fs.existsSync(outFile) && fs.existsSync(tmpFile)) {
    fs.unlinkSync(outFile);
    console.log(`Old file '${outFile}' removed`);
  }

  if (fs.existsSync(tmpFile)) {
    fs.renameSync(tmpFile, outFile);
    console.log(`New file ${outFile} saved`);
  }
}
createEntitiesIndex();
