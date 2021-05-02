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

  // useEffect(() => {
    // console.log(JSON.stringify(hostLinks));
    // console.log(hostLinks[0].href);
    // for (let i = 0; i < hostLinks.length; i++) {
    //   console.log(hostLinks[0].href);
    // }
    
    // if (hostLinks) {

      // let names = ["hi", "temp"];
      // let names = [];
      // hostLinks.forEach(async (aLink) => {
      //   console.log(aLink.href);

      //   const response = await fetch(aLink.href);
      //   const data = await response.json();

      //   console.log(data.name);
      //   const newName = data.name;
      //   if (!hostNames.includes(newName)) {
      //     let temp = hostNames;
      //     temp.push(newName);
      //     setHostNames(temp);
      //   }
      //   getHostData(aLink.href).then(data => {
      //     console.log("data: ");
      //     console.log(data.name)
      //     let newName = [hostNames, data.name].join(", ");
      //     setHostNames(newName);
      //     // names.push(data.name);
      //   }).catch((err) => {
      //     console.log(err);
      //   });
      // });



      // const url = hostLinks[0].href;

      // getHostData(url).then(data => {
      //   setHostNames(data.name);
      // }).catch((err) => {
      //   console.log(err);
      // });

      // let ret = names.join(", ");
      // setHostNames(ret);
  //   }

  // }, []);


  useEffect(() => {
    setHostNames([]);
    if (hostLinks) {
      // let temp = hostLinks.map((aLink) => aLink.href);
      // setHostNames([...hostLinks]);
      // return;

      hostLinks.forEach(async (aLink) => {
        console.log("link: " + aLink.href);

        const response = await fetch(aLink.href);
        const data = await response.json();

        console.log(data.name);
        const newName = data.name;
        if (!hostNames.includes(newName)) {
          let temp = [...hostNames];
          temp.push(newName);
          setHostNames(temp);
        }
      })
    }
  }, [hostLinks])

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
