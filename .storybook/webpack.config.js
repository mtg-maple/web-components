const path = require('path');
module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push({ test: /\.tsx?$/, loader: 'ts-loader' })
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      'sass-loader',
    ]
  });
  return config;
};