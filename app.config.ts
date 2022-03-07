import {ConfigContext, ExpoConfig} from '@expo/config'

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Expo boilerplate - Typescript, eslint and prettier.',
  slug: 'expo-boilerplate',
  privacy: 'public',
  platforms: ['ios', 'android', 'web'],
  version: '1.0.0',
  orientation: 'default',
  icon: './assets/icon.png',
  plugins: ['sentry-expo'],
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  userInterfaceStyle: 'automatic',
  ios: {
    supportsTablet: true,
  },
  android: {
    useNextNotificationsApi: true,
    userInterfaceStyle: 'automatic',
  },
  description: 'Expo boilerplate - Typescript, eslint and prettier..',
})
