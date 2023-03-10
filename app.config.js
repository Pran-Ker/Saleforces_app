module.exports = {
  expo: {
    name: 'aethereus-app',
    slug: 'react-native-expo-examples',
    platforms: ['ios', 'android'],
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    splash: {
      image: './src/assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.myapp.example',
    },
    extra: {
      android: {
        "android:maxSdkVersion": 28,
        "android:targetSdkVersion": 28
      },
      eas: {
        projectId: "2e0c487a-2776-4b38-af67-97912ad0a2a5"
      }
    }
  },
};
   