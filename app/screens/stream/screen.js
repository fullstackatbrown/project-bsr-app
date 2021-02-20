import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';

// TODO
const Stream = () => {
  return (
    // <Text style={globalStyles.h1}>Oh screen (in screens/stream/screen.js)</Text>
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.h1}>> ON AIR</Text>
      <Image style={globalStyles.containerLogo} source={require('../../assets/logo/Logo.png')}/>
      

      <View style={streamStyles.containerTrackDetails}>
        <Text style={globalStyles.headline}>Track: </Text>
        <Text style={globalStyles.headline}>Artist:</Text>
      </View> 

      <Text style={globalStyles.h1}>> ABOUT THE SHOW</Text>
      <View style={streamStyles.containerHostDetails}>
        <Text style={globalStyles.headline}>Host: </Text>
        <Text style={globalStyles.headline}>About: </Text>
      </View> 
    </View>
  );
};

const streamStyles = StyleSheet.create({
    containerTrackDetails: {
        backgroundColor: "#F5ECD5",
        // flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center',
        paddingLeft: '25%',
        paddingTop: "10%",
        paddingBottom: "15%"
      },
      containerHostDetails: {
        backgroundColor: "#F5ECD5",
        flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center',
        paddingLeft: '15%',
      }
})

export default Stream;
