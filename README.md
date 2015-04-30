# grunt-licensy

**Note: This grunt plugin is under current development and not ready for use just now!**

> A grunt task to determine your project's licenses.

[![NPM](https://nodei.co/npm/grunt-licensy.png?mini=true)](https://nodei.co/npm/grunt-licensy/)

[![Build Status](https://travis-ci.org/tdeekens/grunt-licensy.svg?branch=master)](https://travis-ci.org/tdeekens/grunt-licensy)
[![Coverage Status](https://coveralls.io/repos/tdeekens/grunt-licensy/badge.png)](https://coveralls.io/r/tdeekens/grunt-licensy)
[![Dependency Status](https://david-dm.org/tdeekens/grunt-licensy.svg?style=flat)](https://david-dm.org/tdeekens/grunt-licensy)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-licensy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-licensy');
```

## The "licensy" task

### Overview
In your project's Gruntfile, the `licensy` task is available to use.

You can run `grunt licensy` standalone
Or add it to an existing task: `grunt.registerTask('test', ['clean', 'licensy']);`

### Options

```javascript
{
  //Save resulting information in this file
  store: <'./dist/licsensy.json'>,
  //Directory for bower depdencies if not standard 'bower_components'
  bowerDir: <false>,
  //Blacklisted licenses which result in a warning or breaking build
  blacklist: <[]>,
  //Only warn when a blacklisted license is used - if false grunt fails
  warn: <true>
}
```

An example configuration can be found [here](https://github.com/tdeekens/grunt-licensy/blob/master/grunt/tasks/licensy.js) and if you want to check the options you might want to check the [Gruntfile](https://github.com/tdeekens/grunt-licensy/blob/master/tasks/licensy.js) itself.
An example output on the other hand is [here](https://github.com/tdeekens/grunt-licensy/blob/master/dist/licensy.json).

## Developing & Contributing

Developing on the task alone is fairly easy just `git clone https://github.com/tdeekens/grunt-licensy.git` then `cd grunt-licensy`. From there one has to link the package to itself via `npm link && npm link grunt-licensy` which will allow for calling `grunt dev`. Now just work the `task/licensy.js` and check results - feel free to submit a pull-request!

## Release History
- 0.0.0 Development version without release
- 0.1.0 Initial release
- 0.1.1 Add options for tmp directory
- 0.1.2 Fix tmp dir and peerDependencies
- 0.1.3 Change dep gathering via shell cmd to node api
- 0.2.0 Add support for breaking when using a specified blacklisted license
- 0.2.2 Remove duplicate packages from results (comes from nesting)
- 0.3.0 Fix not having `bower`-components and create licensy.json if not present
- 0.3.1 Change default `licensy.json` location
