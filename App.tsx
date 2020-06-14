import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import XcooBeePaySDK from '@xcoobee/react-native-xcoobee-payment-sdk';

XcooBeePaySDK.setSystemConfig({
  campaignId: 'f98.eg6152508',
  formId: 'v025'
});

export default function App() {
  const XcooBeePayQR = XcooBeePaySDK.createPayQR(12.34);

  return (
    <View style={styles.container}>
      <Text>Please pay with XcooBee application.</Text>
      {XcooBeePayQR}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
