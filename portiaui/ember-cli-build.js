/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        babel: {
            includePolyfill: true
        },
        sourcemaps: {
            enabled: true,
            extensions: ['js']
        }
    });

    app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js');
    app.import('bower_components/cookie/cookie.min.js');
    app.import('bower_components/jquery-color/jquery.color.js');
    app.import('bower_components/moment/min/moment.min.js');
    app.import('bower_components/uri.js/src/URI.min.js');
    app.import('bower_components/css-escape/css.escape.js');
    app.import('vendor/tree-mirror.js');

    ['eot', 'svg', 'ttf', 'woff', 'woff2'].forEach(function(file) {
        app.import('bower_components/font-awesome/fonts/fontawesome-webfont.' + file, {
            destDir: 'assets/fonts'
        });
    });

    return app.toTree();
};
