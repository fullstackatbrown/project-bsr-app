import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import { headerStyles } from '../../shared/header.js';
import { MaterialIcons } from '@expo/vector-icons';
import SoundPlayer from 'react-native-sound-player'
import { Audio } from 'expo-av';

// try {
//     // play the file tone.mp3
//     // SoundPlayer.playSoundFile('tone', 'mp3')
//     // or play from url
//     SoundPlayer.playUrl('https://example.com/music.mp3')
// } catch (e) {
//     console.log(`cannot play the sound file`, e)
// }

// TODO
const Stream = () => {

  useEffect(() => {
    playSound()
  }, []);


  // async function playSound2() {
  //   try {
  //     // play the file tone.mp3
  //     // SoundPlayer.playSoundFile('tone', 'mp3')
  //     // or play from url
  //     SoundPlayer.playUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
  //   } catch (e) {
  //       console.log(`cannot play the sound file`, e)
  //   }
  // }

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      //  require('./assets/Hello.mp3')
      // { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
      { uri: 'https://koprori.dyndns.org/bsrmp3' },
      { shouldPlay: true }
      // ''
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); 
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  // return (
  //   <View style={styles.container}>
  //     <Button title="Play Sound" onPress={playSound} />
  //   </View>
  // );


  return (
    // <Text style={globalStyles.h1}>Oh screen (in screens/stream/screen.js)</Text>
    <View style={globalStyles.screenContainer}>
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

// try {
//     // play the file tone.mp3
//     // SoundPlayer.playSoundFile('tone', 'mp3')
//     // or play from url
//     SoundPlayer.playUrl('https://koprori.dyndns.org/bsrmp3')
// } catch (e) {
//     console.log(`cannot play the sound file`, e)
// }


// const start = async () => {
//     // Set up the player
//     await TrackPlayer.setupPlayer();

//     // Add a track to the queue
//     await TrackPlayer.add({
//         id: 'trackId',
//         // url: require('https://koprori.dyndns.org/bsrmp3'),
//         url: 'https://koprori.dyndns.org/bsrmp3',
//         title: 'Track Title',
//         artist: 'Track Artist',
//         // artwork: require('track.png')
//     });

//     // Start playing it
//     await TrackPlayer.play();
// };
// start();

export default Stream;
