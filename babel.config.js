module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-react'],
      'babel-preset-expo',
      '@babel/preset-typescript',
    ],
    plugins: ['react-native-reanimated/plugin'],
  }
}
