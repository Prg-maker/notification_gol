import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from './src/AppLoading';
import theme from './src/theme';

import {Inter_700Bold , Inter_500Medium, useFonts} from '@expo-google-fonts/inter'
import { Home } from './src/screens/Home';


export default function App() {

  const [fontsLoading] = useFonts({
    Inter_500Medium,
    Inter_700Bold
  })


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {!fontsLoading?  <AppLoading/> :  <Home/>}
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:theme.colors.background,
    alignItems:'center'
  }
})

