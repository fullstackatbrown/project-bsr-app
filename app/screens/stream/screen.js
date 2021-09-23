import React, { useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { globalStyles } from '../../styles/global';
import { headerStyles } from '../../shared/header.js';
import { MaterialIcons } from '@expo/vector-icons';
// import SoundPlayer from 'react-native-sound-player'
import { Audio } from 'expo-av';

import { DataContext } from '../../src/DataContext';
import HostName from '../../shared/HostName';

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
  const currentAppData = useContext(DataContext);

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
  
  function renderHostLinks(hostLinks) {
    return hostLinks.map((aLink, index) => {
      let isLast = index === hostLinks.length - 1;
      return <HostName href={aLink.href} last={isLast}/>;
    })
  }

  function stripParagraphTags(textValue) {
    if (textValue.length <= 7) { // "<p></p>".length
      return textValue;
    }

    if (textValue.substring(0, 3) === "<p>") {
      textValue = textValue.substring(3);
    }

    if (textValue.substring(textValue.length - 4, textValue.length) === "</p>"){
      textValue = textValue.substring(0, textValue.length - 4);
    }

    return textValue;
  }

  return (
    // <Text style={globalStyles.h1}>Oh screen (in screens/stream/screen.js)</Text>
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.h1}>> ON AIR</Text>
      <Image style={styles.containerLogo} source={require('../../assets/logo/Logo.png')}/>
      

      <View style={styles.containerTrackDetails}>
        <Text style={globalStyles.headline}>Track: 
          { currentAppData.currentlyPlaying && 
              currentAppData.currentlyPlaying.title }
        </Text>

        <Text>
          <Text style={globalStyles.headline}>Artist: </Text>
          { currentAppData.currentlyPlaying && 
              renderHostLinks(currentAppData.currentlyPlaying["_links"].personas)}
        </Text>
      </View> 

      <Text style={globalStyles.h1}>> ABOUT THE SHOW</Text>
      <View style={styles.containerHostDetails}>
        <Text style={globalStyles.headline}>Host: </Text>

        <Text>
          <Text style={globalStyles.headline}>About: </Text>
          { currentAppData.currentlyPlaying &&
              stripParagraphTags(currentAppData.currentlyPlaying.description) }
        </Text>

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
