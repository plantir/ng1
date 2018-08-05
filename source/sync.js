const fs = require('fs');
const rimraf = require('rimraf');
if (fs.existsSync("./_public")) {
    rimraf('./public', function () {
        fs.rename('./_public', './public', function (err) {
            if (err) throw err;
            console.log('renamed complete');
        });
    });
}