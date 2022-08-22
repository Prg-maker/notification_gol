import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CardPartidas } from '../../components/CardPartidas';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campeonato Brasileiro {'\n'} e Copa do Brasil </Text>

      <ScrollView style={{width:'100%' , marginLeft: '30%', marginTop:50 }}>
        <CardPartidas/>
      </ScrollView>
    </View>
  );
}