/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
sourceExts: ['js', 'json', 'ts', 'tsx'];
module.exports = {
  
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
