/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from '@navigator';
import { Theme, DarkTheme } from '@utils';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer theme={isDarkMode ? DarkTheme : Theme}>
        <MainNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
