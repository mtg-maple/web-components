const path = require("path");
module.exports = ({ config }) => {
  config.resolve.extensions.push(".ts", ".tsx");
  config.module.rules.push({ test: /\.tsx?$/, loader: "ts-loader" })
  return config;
};