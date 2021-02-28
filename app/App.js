import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import TrackPlayer from 'react-native-track-player';
import SoundPlayer from 'react-native-sound-player'


import RootDrawer from './routes/rootDrawer';

const MyTheme = {
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors, 
    background: "#F5ECD5"
  }
};

const App = () => {
  
  return (
    <NavigationContainer theme={MyTheme}>
      <RootDrawer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
