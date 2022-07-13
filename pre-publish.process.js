const fs = require('fs');

const dest = `${__dirname}/e-commerce.lib`

fs.copyFileSync(`${__dirname}/LICENSE`, `${dest}/LICENSE`);

fs.copyFileSync(`${__dirname}/README.md`, `${dest}/README.md`);

fs.copyFileSync(`${__dirname}/package-lock.json`, `${dest}/package-lock.json`);

fs.copyFileSync(`${__dirname}/package.json`, `${dest}/package.json`);
