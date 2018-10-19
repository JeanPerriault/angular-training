const fs = require('fs-extra'); // copy files
const concat = require('concat'); // concat js

// Get only one js and one css to import
(async function build() {
  const files = [
    './dist/socialButtons/runtime.js',
    './dist/socialButtons/polyfills.js',
    './dist/socialButtons/main.js',
  ];

  // await - es7 - works only in async func
  await fs.ensureDir('elements'); // check elements dir exists
  await concat(files, 'elements/social-buttons.js'); // concat js
  await fs.copyFile('./dist/socialButtons/styles.css', 'elements/styles.css'); // copy styles
}) ()
