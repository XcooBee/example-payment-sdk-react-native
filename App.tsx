import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import XcooBeePaySDK from '@xcoobee/react-native-xcoobee-payment-sdk';


// TODO: replace with actual values from XcooBee Payment Project
// Open your payment project in edit mode and review the summary screen
XcooBeePaySDK.setSystemConfig({
  campaignId: 'e98.eg6152508',
  formId: 't025'
});

export default function App() {
  const XcooBeePayQR = XcooBeePaySDK.createPayQR(12.34);

  return (
    <View style={styles.container}>
      <Text>Please scan and pay</Text>
      {XcooBeePayQR}
      <Text>powered by XcooBee</Text>
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
