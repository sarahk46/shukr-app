import React from 'react';
import { View } from 'react-native';

const ScreenWrapper = ({ children }) => {
  return (
    <View style={{ marginTop: 50, marginHorizontal: 10 }}>
      {children}
    </View>
  );
};

export default ScreenWrapper;