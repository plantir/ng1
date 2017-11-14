var fs = require("fs")
var path = require("path")

var pathToComponent = path.join(__dirname + "/../generator", "component")


function generete(name, dist) {
    reateIfNotExist(dist)
    fs.readdir(pathToComponent, (err, files) => {
        files.map(file => {
            let filePath = path.join(pathToComponent, file)
            fs.readFile(filePath, "utf-8", (err, fileContent) => {
                var nameUpper = jsUcfirst(name)
                file = file.replace("name", name)
                var re = new RegExp("%name%", 'g');
                var reUpper = new RegExp("%nameUpper%", 'g');
                fileContent = fileContent.replace(re, name)
                fileContent = fileContent.replace(reUpper, nameUpper)
                let fileDist = path.join(process.cwd() + '/' + dist + "/" + file)
                fs.writeFile(fileDist, fileContent, (err) => {
                    if (err) throw err;
                    console.log("The file was succesfully saved!");
                });
            })
        })
    })
}

function reateIfNotExist(dir) {
    let dirArray = dir.split("/")
    let folderPath = path.join(process.cwd())
    dirArray.map(item => {
        folderPath = path.join(folderPath + "/" + item)
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath)
        }
    })

}

function jsUcfirst(string) {
    stringArray = string.split("-")
    let emtyArray = []
    stringArray.map(item => {
        item = item.charAt(0).toUpperCase() + item.slice(1);
        emtyArray.push(item)
    })
    return emtyArray.join("")
}
exports.generate = generete;