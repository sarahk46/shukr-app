import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { TabNavigator } from './Navigators';
import JournalContext from './JournalContext';

// For the background image:
// https://stackoverflow.com/questions/54599305/how-to-set-background-image-with-react-native-and-react-navigation

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

function App() {
  const [journalEntries, setJournalEntries] = useState([]);

  return (
    <NativeBaseProvider>
      <JournalContext.Provider value={{ journalEntries, setJournalEntries }}>
        <ImageBackground source={require('./v1BackgroundImage.png')} style={styles.backgroundImage}>
          <NavigationContainer theme={navTheme}>
            <TabNavigator />
          </NavigationContainer>
        </ImageBackground>
      </JournalContext.Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: '#3D405B',
    color: '#3D405B',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default App;
