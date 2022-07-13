const fs = require('fs');

const dest = `./e-commerce.lib`

fs.copyFileSync('./LICENSE', dest);

fs.copyFileSync('./package-lock.json', dest);

fs.copyFileSync('./package.json', dest);

fs.copyFileSync('./README.md', dest);