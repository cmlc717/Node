const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const date = require('./date.js');


//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

    if (cmd === "pwd") {
        pwd(done);
    } else if (cmd === "ls") {
        ls(done);
    } else if (cmd.substring(0, 4) === "cat ") {
        cat(cmd.substring(4), done);
    } else if (cmd === "date") {
        date(done);
    } else {
        done('You typed: ' + cmd);
    }
});

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}