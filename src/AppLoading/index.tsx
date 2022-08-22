import {StyleSheet, ActivityIndicator} from 'react-native'


export function AppLoading(){
  return(
    <ActivityIndicator style={styles.container} size="large">

    </ActivityIndicator>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
