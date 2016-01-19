var runReportDir = "reports/unit-tests/status-karma";
var coverageReportDir = "reports/unit-tests/coverage-istanbul";
var junitReportDir = "reports/unit-tests/status-junit";
var testPackage = "./test/tests.webpack.js";

var preprocessors = {};
    preprocessors[testPackage] = ['webpack'];
    preprocessors['index.js'] = ['coverage'];


const RewireWebpackPlugin = require("rewire-webpack");
module.exports = function(config) {
  config.set({
    basePath: "",
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    browsers: [
      'PhantomJS'
    ],
    files: [{
      pattern: testPackage,
      watched: false,
      }, 
    ],
    frameworks: [
      'jasmine',
    ],
    preprocessors: preprocessors,
    reporters: [
      'progress', 'html', 'junit', 'coverage'
    ],
    htmlReporter: {
      outputDir: runReportDir, // where to put the reports 
      templatePath: null, // set if you moved jasmine_template.html
      focusOnFailures: true, // reports show failures on start
      namedFiles: true, // name files instead of creating sub-directories
      urlFriendlyName: true, // simply replaces spaces with _ for files/dirs
      // experimental
      preserveDescribeNesting: false, // folded suites stay folded 
      foldAll: false, // reports start folded (only with preserveDescribeNesting)
    },
    coverageReporter: {
      type: 'lcov',
      dir: coverageReportDir
    },
    junitReporter: {
      outputDir: junitReportDir, // results will be saved as $outputDir/$browserName.xml 
      suite: ''
    },
    webpack: {
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }, ],
        postLoaders: [{
          test: /\.(js|jsx)$/,
          exclude: /(spec|node_modules|tests\.webpack\.js|bower_components)\//,
          loader: 'istanbul-instrumenter'
        }]
      },

      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      watch: true,
      plugins: [new RewireWebpackPlugin()]
    },
    webpackServer: {
      noInfo: true,
    },
    plugins: [
      require("karma-webpack"),
      require("karma-jasmine"),
      require("karma-phantomjs-launcher"),
      require("karma-chrome-launcher"),
      require("karma-coverage"),
      require("karma-html-reporter"),
      require("karma-junit-reporter")
    ]
  });
};
