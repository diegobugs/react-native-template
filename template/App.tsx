/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FunctionComponent } from "react";
import { StatusBar, useColorScheme } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "@navigator";
import { Theme, DarkTheme } from "@utils";
import { Provider } from "react-redux";
import { store, persistor } from "@store";
import { PersistGate } from "redux-persist/integration/react";

const App: FunctionComponent<JSX.Element> = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar hidden={true} />
        <NavigationContainer theme={isDarkMode ? DarkTheme : Theme}>
          <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
