module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@atoms': './src/components/atoms',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@images': './src/assets/images',
          '@molecules': './src/components/molecules',
          '@navigator': './src/navigator',
          '@organisms': './src/components/organisms',
          '@store': './src/store',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
