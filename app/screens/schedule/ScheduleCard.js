import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';
import { WebView } from 'react-native-webview';
import HostName from './HostName';

const ScheduleCard = ({time, hostLinks, show, about}) => {

  const [showAll, setShowAll] = useState(false);
  const [hostNames, setHostNames] = useState([]);

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

  function renderHostLinks() {
    if (!hostLinks) {
      return;
    }

    return hostLinks.map((aLink, index) => {
      let isLast = index === hostLinks.length - 1;
      return <HostName href={aLink.href} last={isLast}/>;
    })
  }

  return (
    <View style={styles.centeringContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.timeContainer}>
          <Text style={globalStyles.h2}>{time}</Text>
        </View>

        <Text>
          <Text style={globalStyles.headline}>Host: </Text> {renderHostLinks()}
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
