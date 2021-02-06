import React from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyles } from '../../styles/global';

// TODO
const Stream = () => {
  return (
    // <Text style={globalStyles.h1}>Oh screen (in screens/stream/screen.js)</Text>
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.h1}>> ON AIR</Text>
      <Image style={globalStyles.containerLogo} source={require('../../assets/logo/Logo.png')}/>
      

      <View style={globalStyles.containerTrackDetails}>
        <Text style={globalStyles.headline}>Track: </Text>
        <Text style={globalStyles.headline}>Artist:</Text>
      </View> 

      <Text style={globalStyles.h1}>> ABOUT THE SHOW</Text>
      <View style={globalStyles. containerHostDetails}>
        <Text style={globalStyles.headline}>Host: </Text>
        <Text style={globalStyles.headline}>About: </Text>
      </View> 
    </View>
  );
};



export default Stream;
