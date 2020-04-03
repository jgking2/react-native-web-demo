# Installing

```sh
npx --ignore-existing react-native init ReactNativeTutorials --template react-native-template-typescript
```

# React Navigation

```sh
# From documentation https://reactnavigation.org/docs/getting-started
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack

cd ios; pod install; cd ..
```

> Add this to the very top of index.js

```js
import 'react-native-gesture-handler';
```
