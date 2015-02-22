var broccoli = require('broccoli');
var compileSass = require('broccoli-sass');
var execSync = require('exec-sync');
var injectLivereload = require('broccoli-inject-livereload');
var mapSeries = require('promise-map-series');
var mergeTrees = require('broccoli-merge-trees');
var Writer = require('broccoli-writer');

//
// Jekyll Compiler
//

Jekyll.prototype = Object.create(Writer.prototype);
Jekyll.prototype.constructor = Jekyll;

function Jekyll(trees) {
    if (!(this instanceof Jekyll)) return new Jekyll(trees);

    this.inputTrees = trees;
    this.description = 'Jekyll';
}

Jekyll.prototype.write = function(readTree, destDir) {
    return mapSeries(this.inputTrees, function iterator(tree) {
        return readTree(tree);
    }).then(function onceDone() {
        execSync('bundle exec jekyll build -d ' + destDir);
    });
};

//
// Build
//

var scss = compileSass(['asset', '_vendor/foundation/scss'], 'app.scss', 'asset/app.css');
var site = Jekyll(['_layouts', '_posts', 'atom.xml', 'index.html']);

module.exports = injectLivereload(mergeTrees([site, scss]));
