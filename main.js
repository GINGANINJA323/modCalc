
const operations = require('./mod');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Mod Calculator V1.');

main = () => {
  readline.question('Choose operation: ', (op) => {
    if (op === 'pr') {
      operations.primitiveRoot(readline, main);
    } if (op === 'mod') {
      operations.mod(readline, main);
    } if (op === 'block') {
      operations.block(readline, main);
    } if (op === 'add') {
      operations.add(readline, main);
    } if (op === 'page') {
      operations.page(readline, main);
    } if (op === 'exit') {
      process.exit();
    } if (op === 'gcd') {
      operations.gcd(readline, main);
    } if (op === 'fraction') {
      operations.fractionSimp(readline, main);
    } else {
      readline.question('Illegal entry. Again? ', choice => {
        if (choice === 'y') {
          main();
        } else {
          process.exit();
        }
      })
    }
  });
}

main();