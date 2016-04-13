var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
    include: '*.twitter.com',
    contentScriptFile: data.url('die.js')
});