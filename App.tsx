import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Asset } from 'expo-asset';
export default function App() {
   useEffect(() => {
     loadAsset();
  }, [])
  
  return (
    <View style={styles.container}>
      <Text>does this work</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const loadAsset = async () => {
  const moduleAsset = require('./assets/example.glb');
  const asset = Asset.fromModule(moduleAsset);
  await asset.downloadAsync();
  console.log(asset.localUri);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
