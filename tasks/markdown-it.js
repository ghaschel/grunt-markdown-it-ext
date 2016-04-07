/*
 * grunt-markdown-it-ext
 * Licensed under the MIT license.
 */

'use strict';
var md = require('markdown-it')();

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('markdown-it', 'markdown-it (markdown parser) grunt plugin', function() {
    // Merge task-specific and/or target-specific options with these defaults.

    var options = this.options({
      punctuation: '.',  // FIXME remove
      separator: ', ', // FIXME remove
      extensions: [],
      bootstrap: false,
      docTitle: 'Readme.md'
    });

    md.set(options);

    options.extensions.forEach(function (ext) {
        md.use(ext);
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = removeInvalidFiles(f).map(function(f) {
        // Read file source.
        return md.render(grunt.file.read(f));
      }).join(grunt.util.normalizelf(options.separator));

      // Write the destination file.
      grunt.file.write(f.dest, htmlWrap(src, options.bootstrap, options.docTitle));

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

  var removeInvalidFiles = function(files) {
    return files.src.filter(function(filepath) {
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      }
      return true;
    });
  };

  var htmlWrap = function(src, bootstrap, title) {
    var css;
    if (bootstrap === true) {
      css = '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">';
    } else {
      css = '';
    }
    // FIXME remove spaces and add EOL characters to .html output
    return'<!DOCTYPE html>\
            <html lang="pt-br">\
              <head>\
                <meta charset="utf-8">\
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">\
                ' + css + '\
                <title>' + title + '</title>\
              </head>\
              <body>\
                <main>\
                  <div class="container">\
                  ' + src + '\
                  </div>\
                </main>\
              </body>\
            </html>';
  };

};
