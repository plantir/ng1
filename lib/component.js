var fs = require('fs');
var path = require('path');

var pathToComponent = path.join(__dirname + '/../generator', 'component');

function generete(name, dist) {
  reateIfNotExist(dist);
  var nameUpper = jsUcfirst(name);
  var re = new RegExp('%name%', 'g');
  var reUpper = new RegExp('%nameUpper%', 'g');
  var reSelectorName = new RegExp('%selectorName%', 'g');
  var selectorName = buildSelectorName(name);
  fs.readdir(pathToComponent, (err, files) => {
    files.map(file => {
      let filePath = path.join(pathToComponent, file);
      file = file.replace('name', name);
      fs.readFile(filePath, 'utf-8', (err, fileContent) => {
        fileContent = fileContent.replace(reSelectorName, selectorName);
        fileContent = fileContent.replace(re, name);
        fileContent = fileContent.replace(reUpper, nameUpper);
        let fileDist = path.join(process.cwd() + '/' + dist + '/' + file);
        fs.writeFile(fileDist, fileContent, err => {
          if (err) throw err;
          console.log('The file was succesfully saved!');
        });
      });
    });
  });
  _add_to_near_module(dist, 0, name, nameUpper);
}

async function _add_to_near_module(dist, upto, name, nameUpper) {
  let find = false;
  let folder_path = path.join(process.cwd() + '/' + dist + '/..'.repeat(upto));
  console.log(folder_path);

  let files = fs.readdirSync(folder_path);
  if (!files || files.length === 0) {
    _add_to_near_module(dist, upto + 1, name, nameUpper);
    return;
  }
  for (let file of files) {
    if (file.includes('module.ts')) {
      find = true;
      let file_path = path.join(folder_path + '/' + file);
      let logRows = fs
        .readFileSync(file_path)
        .toString()
        .split('\n');
      let last_import_index;
      let last_component_index = 4;
      for (let index in logRows) {
        if (logRows[index].includes('import')) {
          last_import_index = +index;
          continue;
        }
        if (logRows[index].includes('.component')) {
          last_component_index = +index;
          continue;
        }
      }
      let relative_path = path.relative(
        folder_path,
        path.join(process.cwd() + '/' + dist)
      );
      relative_path = relative_path.replace(/\\/g, '/');
      logRows.splice(
        last_import_index + 1,
        0,
        `import { ${nameUpper} } from './${relative_path}/${name}.component';`
      );
      logRows.splice(
        last_component_index + 2,
        0,
        `  .component(${nameUpper}.selector, ${nameUpper})`
      );
      fs.writeFileSync(file_path, logRows.join('\n'));
      break;
    }
  }
  if (!find) {
    _add_to_near_module(dist, upto + 1, name, nameUpper);
  }
}

function reateIfNotExist(dir) {
  let dirArray = dir.split('/');
  let folderPath = path.join(process.cwd());
  dirArray.map(item => {
    folderPath = path.join(folderPath + '/' + item);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
  });
}

function jsUcfirst(string) {
  stringArray = string.split('-');
  let emtyArray = [];
  stringArray.map(item => {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    emtyArray.push(item);
  });
  return emtyArray.join('');
}

function buildSelectorName(string) {
  stringArray = string.split('-');
  let emtyArray = [];
  stringArray.map((item, i) => {
    if (i > 0) {
      item = item.charAt(0).toUpperCase() + item.slice(1);
    }
    emtyArray.push(item);
  });
  return emtyArray.join('');
}
exports.generate = generete;
