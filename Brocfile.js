var broccoli = require('broccoli');
var compileSass = require('broccoli-sass');
var execSync = require('exec-sync');
var injectLivereload = require('broccoli-inject-livereload');
var mergeTrees = require('broccoli-merge-trees');

function jekyll(tree) {
    execSync('bundle exec jekyll build');

    return injectLivereload('_jekyll');
}

var scss = compileSass(['asset', '_vendor/foundation/scss'], 'app.scss', 'asset/app.css');
var site = jekyll('.');

module.exports = mergeTrees([site, scss]);
