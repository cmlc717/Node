const fs = require('fs');

module.exports = function (fileName, done) {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            throw err;
        } else {
            let file = files.filter((file) => fileName === file);
            fs.readFile(`${file[0]}`, (err, data) => {
                if (err) {
                    throw err;
                } else {
                    done(`${data}`);
                }
            });
        }
    });
}