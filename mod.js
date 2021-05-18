const mod = (rl, cb) => {
  rl.question('Exponent: ', expo => {
    rl.question('Diviser: ', div => {
      if (expo === '' || div === '') {
        console.log('Values incorrect.');
        cb();
      }
        const result = (+expo) % (+div);
        console.log(`${expo} mod ${div} = ${result}`);
        cb();
    });
  });
}

const block = (rl, cb) => {
  rl.question('Block size (bytes): ', bs => {
    rl.question('Byte: ', byte => {
      if (bs === '' || byte === '') {
        console.log('Values incorrect.');
        cb();
      }
        const result = Math.floor((+byte) / (+bs));
        console.log(`Byte ${byte} resides in Block ${result}.`);
        cb();
    });
  });
}

const page = (rl, cb) => {
  rl.question('Page table bits: ', ptb => {
    rl.question('Address space size: ', vass => {
      if (ptb === '' || vass === '') {
        console.log('Values incorrect.');
        cb();
      }
        const offset = vass - ptb;
        const pageAmount = Math.pow(2, ptb);
        const pageSize = Math.pow(2, offset);
        console.log(`Page size: ${pageSize} (${pageSize / 1024}KB), page amount: ${pageAmount}`);
        cb();
    });
  });
}

const calcRoot = (count, values, pr, main) => {
  let c = count;
  const countValues = [];
  let result = [];

  while (c <= values) {
    const value = Math.pow(pr, c) % main;
    console.log(`Sum: ${Math.pow(pr, c)} mod ${main} = ${value}`);
    result.push(value);
    countValues.push(c);
    c++
  }

  result = [...new Set(result)].sort();

  if (JSON.stringify(countValues) === JSON.stringify(result)) {
    return true;
  }

  return false;
}

const primitiveRoot = (rl, cb) => {
  rl.question('Primitive Root: ', pr => {
    rl.question('Of ?: ', main => {
      if (pr === '' || main === '') {
        console.log('Values incorrect.');
        cb();
      }
        const values = Number(main) - 1;
        let c = 1
        
        if (calcRoot(c, values, pr, main)) {
          console.log(`${pr} is a primitive root of ${main}`);
        } else {
          console.log(`${pr} is not a primitive root of ${main}`);
        }
        cb();
    });
  });
}

const add = (rl, cb) => {
  rl.question('First Exponent: ', expo1 => {
    rl.question('Second Exponent: ', expo2 => {
      rl.question('Diviser: ', mod => {
        if (expo1 === '' || expo2 === '' || mod === '') {
          console.log('Values incorrect.');
          cb();
        }

        const v1 = expo1 % mod;
        console.log(`${expo1} mod ${mod} = ${v1}`);
        const v2 = expo2 % mod;
        console.log(`${expo2} mod ${mod} = ${v2}`);

        const result = (v1 + v2) % mod;

        console.log(`(${expo1} + ${expo2}) mod ${mod} = ${result}`);
        
        cb();
      });
    });
  });
}

const euclid = (a, b, cb) => {
  console.log(`Running with ${a} and ${b}`);
  if (b === 0) {
    console.log(`The greatest common divisor (GCD) is ${a}`);
    return cb();
  }

  return euclid(b, a % b, cb);
}

const gcd = (rl, cb) => {
  console.log('Euclidean GCD calculator.');
  rl.question('First value: ', a => {
    rl.question('Second value: ', b => {
      euclid(Number(a), Number(b), cb);
    })
  })
}

module.exports = {
  primitiveRoot,
  mod,
  block,
  add,
  page,
  gcd
}