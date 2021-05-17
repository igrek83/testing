const presets = [
  [
    "@babel/env",
    {
      targets: {
        browsers: [
          "safari >= 5",
          "edge >= 15",
          "chrome >= 42",
          "ChromeAndroid >= 42",
          "firefox >= 15",
          "ie >= 8"
        ],
      },
      useBuiltIns: "usage",
      corejs: "3.4.1"
    }
  ],
];

module.exports = {
  presets
};