# grunt-markdown-it-ext

[![npm version](https://badge.fury.io/js/grunt-markdown-it-ext.svg)](https://badge.fury.io/js/grunt-markdown-it-ext)

> Grunt Markdown-it Extended - markdown-it (markdown parser) grunt plugin

## Getting Started

This is a fork from the [original package](https://github.com/ThePacielloGroup/grunt-markdown-it).

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-markdown-it-ext --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-markdown-it-ext');
```

## The "markdown-it" task

### Overview
In your project's Gruntfile, add a section named `markdown-it` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  markdown-it: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

#### options.extensions
Type: `Object`
Default value: `null`

An object requiring a markdown-it plugin. eg. `require('markdown-it-emoji')`

#### options.bootstrap
Type: `boolean`
Default value: `false`

If set true, a `<link>` tag pointing to MaxCDN's bootstrap files will be added.

#### options.docTitle
Type: `String`
Default value: `Readme.md`

Title to be shown at the `readme.html` preview.

### Usage Examples

#### Default Options
In this example, the default options are used to generate a basic Markdown preview.

```js
grunt.initConfig({
  'markdown-it': {
    options: {},
    files: {
      src:'README.md',
      dest: 'readme.html'
    }
  },
});
```

#### Custom Options
In this example, custom options are used to do generate a Markdown file with a custom title, bootstrap reset and unicode emoji support.

```js
grunt.initConfig({
  'markdown-it': {
    options: {
      bootstrap: true,
      docTitle: 'This is a custom title',
      extensions: [
        require('markdown-it-emoji') //npm install markdown-it-emoji
      ]
    },
    files: {
      src:'app/assets/README.md',
      dest: 'public/assets/readme.html'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.2.4
  * Added HTML Wrap
  * Added Bootstrap support
  * Added Custom title support
* 0.2.0 Initial fork
