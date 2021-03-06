// Karma configuration
// Generated on Sat Nov 08 2014 19:20:47 GMT-0700 (MST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'src/**/*.html',
      'src/modules/components/components.module.js',
      'src/modules/components/input-directive/input.directive.js',
      'src/modules/pessoa/pessoa.module.js',
      'src/modules/pessoa/pessoa-create.controller.js',
      'src/modules/pessoa/pessoa-list.controller.js',
      'src/modules/pessoa/pessoa-edit.controller.js',
      'src/modules/pessoa/pessoa.service.js',
      'src/modules/pessoa/pessoa.routes.js',
      'src/app.js',
      'test/**/*.js',
    ],

    client: {
      captureConsole: true,
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      //stripSufix: '.ext',

      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      moduleName: 'myAppTemplates'
    },

    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};