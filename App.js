import React from 'react';
import { View, Text } from 'react-native';
export default function App(){
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:22,fontWeight:'700'}}>Skilldrive</Text>
      <Text>Build APK via GitHub Actions</Text>
    </View>
  );
}
