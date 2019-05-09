var fs = require('fs');
var path = require('path');

var pathTofactory = path.join(__dirname + '/../generator', 'factory');

function generete(name, dist) {
  let distArray = dist.split('/');
  dist = distArray.slice(0, distArray.length - 1).join('/');
  reateIfNotExist(dist);
  var nameUpper = jsUcfirst(name);
  var re = new RegExp('%name%', 'g');
  var reUpper = new RegExp('%nameUpper%', 'g');
  var reSelectorName = new RegExp('%selectorName%', 'g');
  var selectorName = buildSelectorName(name);
  fs.readdir(pathTofactory, (err, files) => {
    files.map(file => {
      let filePath = path.join(pathTofactory, file);
      fs.readFile(filePath, 'utf-8', (err, fileContent) => {
        file = file.replace('name', name);
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
      let last_factory_index = logRows.findIndex(item =>
        item.includes('.module')
      );
      for (let index in logRows) {
        if (logRows[index].includes('import')) {
          last_import_index = +index;
          continue;
        }
        if (logRows[index].includes('.factory')) {
          last_factory_index = +index;
          continue;
        }
      }

      let relative_path = path.relative(
        folder_path,
        path.join(process.cwd() + '/' + dist)
      );
      relative_path = relative_path.replace(/\\/g, '/');
      console.log(relative_path);
      logRows.splice(
        last_import_index + 1,
        0,
        `import { ${nameUpper}Factory } from './${
          relative_path == '' ? '' : `${relative_path}/`
        }${name}.factory';`
      );
      logRows.splice(
        last_factory_index + 2,
        0,
        `  .factory(${nameUpper}Factory.selector, ${nameUpper}Factory.resource)`
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
  dirArray.map((item, index) => {
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
