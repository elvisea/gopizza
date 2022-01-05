import React from 'react';
import { Text, View } from 'react-native';

const Teste: React.FC = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7159c1'
    }}
    >
      <Text style={{ color: '#000' }}>Teste</Text>
    </View>
  );
}

export default Teste;