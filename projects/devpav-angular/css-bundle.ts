import {relative} from 'path';
import {Bundler} from 'scss-bundle';
import {writeFile} from 'fs-extra';

const scssConfig = require('../../scss-config.json');

/** Bundles all SCSS files into a single file */
async function bundleScss() {
  console.log('Run bundleScss');

  const pathToOriginalSCSSFile = `${scssConfig.locationOriginFile}/${scssConfig.originNameFile}`;
  console.log('Path to original SCSS File: ', pathToOriginalSCSSFile);

  const { found, bundledContent, imports } = await new Bundler()
    .bundle(pathToOriginalSCSSFile,
      [...scssConfig.matchesFile]);

  console.log(`Found: ${found}`);
  console.log(`Imports: ${imports}`);
  console.log(`BundledContent: \n${bundledContent}`);

  if (imports) {
    const cwd = process.cwd();

    const filesNotFound = imports
      .filter(x => !x.found)
      .map(x => relative(cwd, x.filePath));

    if (filesNotFound.length) {
      console.error(`SCSS imports failed \n\n${filesNotFound.join('\n - ')}\n`);
      throw new Error('One or more SCSS imports failed');
    }
  }

  if (found) {
    const pathToCompiledLibrary = `${scssConfig.pathCompiledLibrary}/${scssConfig.distNameFile}`;
    console.log('Path to compiled library: ', pathToCompiledLibrary);

    await writeFile(pathToCompiledLibrary, bundledContent);
    console.log(`Done`);
  }
}

bundleScss();
