const seleniumServer = require('selenium-server');

const { defineSupportCode } = require('cucumber');

defineSupportCode(({ setDefaultTimeout }) => {
  setDefaultTimeout(30 * 1000);
});

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--compiler', 'js:babel-core/register',
    '--require', 'test/step_definitions',
    '--format', 'json:test/reports/cucumber.json',
    'test'],
});

module.exports = {
  src_folders: ['test'],
  output_folder: 'test/reports',
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': 'node_modules/chromedriver/bin/chromedriver',
    },
  },

  test_settings: {
    default: {
      exclude: ['./test/config'],
      launch_url: 'http://localhost:3000',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        path: './test/screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
};
