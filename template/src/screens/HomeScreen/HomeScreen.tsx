import { MainStackParamList } from '@navigator';
import { NavigationProp, useTheme } from '@react-navigation/native';
import { ThemeType } from '@utils';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

interface HomeScreenProps {
  navigation: NavigationProp<MainStackParamList, 'Home'>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const theme = useTheme() as ThemeType;
  const logo = require('@images/logo.png');

  return (
    <SafeAreaView style={styles.container(theme)}>
      <View>
        <Image source={logo} />
        <Text>Template App</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
