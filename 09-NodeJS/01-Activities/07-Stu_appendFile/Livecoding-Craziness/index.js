var fs = require("fs");

var [node, file, command, ...args] = process.argv;
// var node = process.argv[0];
// var file = process.argv[1];
// var command = process.argv[2];
// var args = process.argv.slice(2);

// console.log(node);
// console.log(file);
// console.log(args);
if (command.toLowerCase() === 'append') {
  // we add a newline character to the command line argument
  fs.appendFile("log.txt", args + '\n', function(err) {
  
    if (err) {
      console.log(err);
    }
    else {
      console.log("Commit logged!");
    }
  
  });
} else if (command.toLowerCase() === 'clear') {
  fs.writeFile("log.txt", "", function(err) {
  
    if (err) {
      console.log(err);
    }
    else {
      console.log("Commit logged!");
    }
  
  });
} else {
  console.log('Command not recognized');
}
