import {StyleSheet} from 'react-native'
import theme from '../../theme'
import {getBottomSpace} from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor:"transparent",

    alignItems:'center',

    paddingTop:getBottomSpace() + 35
    
  },
  title:{
    color:theme.colors.text,
    fontFamily:theme.fonts.fontBold,

    fontSize:19
  }
}) 