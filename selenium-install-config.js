var selenium = require('selenium-standalone');
var path = require('path');

selenium.install({
  version: '3.8.1',
  baseURL: 'https://selenium-release.storage.googleapis.com',
  drivers: {
    chrome: {
      version: '2.37',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com',
    },
    gecko: {
      version: '0.20.0',
      arch: process.arch,
      baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
    },
    ie: {
      version: '3.0.1',
      arch: process.arch,
      baseURL: 'https://selenium-release.storage.googleapis.com',
    }
  },
  basePath: path.resolve(process.cwd(), '.bin'),
}, function(error, response){
  console.log('---> completed downloading');

  if (error) {
    console.error(error);
  }

  console.log('Downloaded selenium jar to: %s', response.selenium.installPath);
});