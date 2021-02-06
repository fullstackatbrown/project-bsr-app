import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/global';
import { headerStyles } from '../../shared/header.js';
import { MaterialIcons } from '@expo/vector-icons';

// TODO
const Stream = () => {
  return (
    // <Text style={globalStyles.h1}>Oh screen (in screens/stream/screen.js)</Text>
    <View style={globalStyles.container}>
      {/* <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} /> */}
      

      {/* <MaterialIcons name='menu' size={28} style={headerStyles.icon} /> */}
      <Text style={globalStyles.h1}>> ON AIR</Text>
      <Image style={styles.containerLogo} source={require('../../assets/logo/Logo.png')}/>
      

      <View style={styles.containerTrackDetails}>
        <Text style={globalStyles.headline}>Track: </Text>
        <Text style={globalStyles.headline}>Artist:</Text>
      </View> 

      <Text style={globalStyles.h1}>> ABOUT THE SHOW</Text>
      <View style={styles.containerHostDetails}>
        <Text style={globalStyles.headline}>Host: </Text>
        <Text style={globalStyles.headline}>About: </Text>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  // TODO
  containerLogo: {
    backgroundColor: "#F5ECD5",
    // flex: 1,
    width: "20%",
    height: "30%",
		// justifyContent: 'flex-start',
    // alignItems: 'center',
    paddingLeft: '100%'
  },
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
  },
});


export default Stream;