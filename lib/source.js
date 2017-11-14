var copydir = require('copy-dir');
var path = require("path")

let source = path.join(__dirname + "/../source")

function generate(name) {
    var dist = path.join(process.cwd() + "/" + name)
    copydir(source, dist, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('ok');
        }
    });
}

exports.generate = generate