module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
  };
};


// babel.config.js
// module.exports = function (api) {
//   api.cache(true)
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       [
//         'expo-router/babel',
//         'module-resolver',
//         {
//           root: ['./'],
//           alias: {
//             'moti/skeleton': 'moti/skeleton/react-native-linear-gradient',
//           },
//         },
//       ],
//     ],
//   }
// }