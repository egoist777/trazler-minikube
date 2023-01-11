routes = require('./routes');
express = require('express');
os = require('os');

const prerender = require('prerender');

if (os.platform() === "win32"){
    prerender({
        logRequests: false,
        captureConsoleLog: false,
    }).start();
}  else {
    prerender({
        logRequests: false,
        captureConsoleLog: false,
        chromeFlags: [ '--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars' ],
        chromeLocation: '../usr/bin/chromium-browser'
    }).start();
}

const app = module.exports = express();

app.get('/app/dist/js/prerender.js', routes.prerenderScript);
