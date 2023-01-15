import { ThemeType } from '@utils';
import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: (theme: ThemeType) => ViewStyle;
  [key: string]: any;
}

export const styles = StyleSheet.create<Styles>({
  container: theme => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  }),
});
