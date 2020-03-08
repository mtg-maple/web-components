const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push({ test: /\.tsx?$/, loader: 'ts-loader' });

  config.module.rules.push({
    test: /\.scss$/,
    exclude: [
      resolve('src/styles'),
    ],
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          prependData: `
            @import "${resolve('src/styles/_variables.scss')}";
          `,
        }
      },
    ]
  });

  return config;
};