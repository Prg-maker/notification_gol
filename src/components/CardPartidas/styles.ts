import {StyleSheet} from 'react-native'
import theme from '../../theme'

export const styles = StyleSheet.create({
  container:{
    width: '70%',
    height: 250,
    backgroundColor:theme.colors.text,
    borderRadius: 10
  },
  nameCamp:{
    textAlign:'center',
    fontFamily:theme.fonts.fontMedium,
    fontSize:14,
    marginTop:10
  },
  home:{
    width: '50%',
    height: '70%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    
  },
  image:{
    height: 50,
    width: 50,
    backgroundColor:theme.colors.text,
  },
  nameTime:{
    fontFamily:theme.fonts.fontBold,
    fontSize:14,
    marginVertical:6
  },
  placar:{
    fontFamily:theme.fonts.fontBold,
    fontSize:16,
  },
  x:{
    marginTop:'15%',
    fontFamily:theme.fonts.fontBold,
    fontSize:19
  },

  fora:{
    width: '50%',
    height: '70%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    
  }
})