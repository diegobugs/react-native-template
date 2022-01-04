module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/components/assets',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@navigator': './src/navigator',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
