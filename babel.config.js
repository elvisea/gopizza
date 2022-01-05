module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts', '.tsx', '.js', '.jsx', '.json'
          ],
          alias: {
            '@assets': './src/assets',
            '@screens': './src/screens',
            '@components': './src/components',
          }
        }
      ]
    ]
  };
};
