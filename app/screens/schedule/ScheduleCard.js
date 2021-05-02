import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import { WebView } from 'react-native-webview';

const ScheduleCard = ({time, hostLinks, show, about}) => {

  const [showAll, setShowAll] = useState(false);
  const [hostNames, setHostNames] = useState([]);

  const getHostData = (url) => {
    const data = fetch(url)
        .then(response => response.json())
    return data;
  }

  useEffect(() => {
    let shouldResetHostName = true;

    const dummyHostLinks = [
      {
        href: "https://spinitron.com/api/personas/145968?access-token=994is4yYXo18_ku-t_pQCaci", 
      },
      {
        href: "https://spinitron.com/api/personas/97816?access-token=994is4yYXo18_ku-t_pQCaci"
      }
    ];

    if (hostLinks) {
      console.log("host linkkkkkkkkkkkkkkkks");
      console.log(hostLinks);
      hostLinks.forEach(async (aLink) => {
      // dummyHostLinks.forEach(async (aLink) => {
        const response = await fetch(aLink.href);
        const data = await response.json();
        const newName = data.name;

        if (shouldResetHostName) {
          setHostNames([newName]);
          shouldResetHostName = false;
        }
        else if (!hostNames.includes(newName)) {
          let temp = [...hostNames];
          temp.push(newName);
          setHostNames(temp);
        }
      })
    }
  }, [hostLinks])
  
  
  // =========================================
  
  // const [shouldResetHostName, setShouldResetHostName] = useState(true);
  // useEffect(() => {
  //   setShouldResetHostName(true);
  //   setHostNames([]);
  // }, [hostLinks])

  // const [haveReset, setHaveReset] = useState(false);
  // const dummyHostLinks = [
  //   {
  //     href: "https://spinitron.com/api/personas/145968?access-token=994is4yYXo18_ku-t_pQCaci", 
  //   },
  //   {
  //     href: "https://spinitron.com/api/personas/97816?access-token=994is4yYXo18_ku-t_pQCaci"
  //   }
  // ];
  // useEffect(() => {
  //   if (hostLinks && shouldResetHostName && hostNames.length === 0) {
  //     setShouldResetHostName(false);
  //     // setHaveReset(false);
  //     dummyHostLinks.forEach(async (aLink) => {
  //       const response = await fetch(aLink.href);
  //       const data = await response.json();
  //       const newName = data.name;

  //       // if (!haveReset) {
  //       //   setHostNames([newName]);
  //       //   setHaveReset(true);
  //       // }
  //       if (!hostNames.includes(newName)) {
  //         let temp = [...hostNames];
  //         temp.push(newName);
  //         setHostNames(temp);
  //       }
  //     })
  //   }
  // }, [shouldResetHostName])

  function toggleCollapse() {
    setShowAll(!showAll);
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
    <View style={styles.centeringContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.timeContainer}>
          <Text style={globalStyles.h2}>{time}</Text>
        </View>

        <Text>
          <Text style={globalStyles.headline}>Host: </Text>{hostNames.join(", ")}
        </Text>

        <Text>
          <Text style={globalStyles.headline}>Show: </Text>{show}
        </Text>

        { (about.length > 0) && 
        <>
          <Text numberOfLines={showAll ? 0 : 3}>
            <Text style={globalStyles.headline}>About: </Text>{stripParagraphTags(about)}
          </Text>

          <View style={styles.toggleButtonContainer}>
            <MaterialIcons name={showAll ? 'expand-less' : 'expand-more'} size={40} onPress={toggleCollapse} />
          </View>
        </>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeringContainer: {
    width: "100%",
    justifyContent: "center", 
    alignItems: "center"
  },
  cardContainer: {
    paddingHorizontal: "4%", 
    width: "100%",
    borderColor: "black", 
    borderTopWidth: 1.4, 
    marginVertical: "2%", 
  }, 
  boldedText: {
    fontWeight: "bold"
  }, 
  timeContainer: {
    marginVertical: "4%", 
  },
  toggleButtonContainer: {
    flexDirection: "row", 
    justifyContent: "flex-end"
  }
});

export default ScheduleCard;
