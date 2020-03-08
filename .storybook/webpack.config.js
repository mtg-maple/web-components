const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push({
    test: /\.stories.\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { injectParameters: true },
      },
    ],
    include: [resolve('src')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      'ts-loader',
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

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