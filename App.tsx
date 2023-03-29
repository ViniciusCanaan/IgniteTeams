import { StatusBar } from 'react-native';
import { Groups } from '@screens/Groups';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';

import theme from './src/theme';

import { ThemeProvider } from 'styled-components';
import { NewGroup } from '@screens/NewGroup';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}
