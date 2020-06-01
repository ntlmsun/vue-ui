var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var directives = fs.readdirSync(path.resolve(__dirname, '../shared/directives'));
var filters = fs.readdirSync(path.resolve(__dirname, '../shared/filters'));
var utils = fs.readdirSync(path.resolve(__dirname, '../shared/utils'));
var mixins = fs.readdirSync(path.resolve(__dirname, '../shared/mixins'));
var transition = fs.readdirSync(path.resolve(__dirname, '../shared/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`msun-lib-ui/packages/${key}`] = `msun-lib-ui/lib/${key}`;
});

externals['msun-lib-ui/shared/locale'] = 'msun-lib-ui/lib/locale';

directives.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`msun-lib-ui/shared/directives/${file}`] = `msun-lib-ui/lib/directives/${file}`;
});

filters.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`msun-lib-ui/shared/filters/${file}`] = `msun-lib-ui/lib/filters/${file}`;
});

utils.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`msun-lib-ui/shared/utils/${file}`] = `msun-lib-ui/lib/utils/${file}`;
});

mixins.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`msun-lib-ui/shared/mixins/${file}`] = `msun-lib-ui/lib/mixins/${file}`;
});

transition.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`msun-lib-ui/shared/transitions/${file}`] = `msun-lib-ui/lib/transitions/${file}`;
});


externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../shared'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'msun-lib-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

