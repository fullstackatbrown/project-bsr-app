import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Loading = ({ loadingError }) => {

  const BLINK_INTERVAL = 800;
  const TEXT_DISPLAY_INTERVAL = 800;
  const [showCursor, setShowCursor] = useState(false);
  const [onAnimationIndex, setOnAnimationIndex] = useState(0);
  const [curMessageString, setCurMessageString] = useState("");

  const loadingMessageStrings = [
    "> initializing groovy beats...\n", 
    "> loading the best DJs...\n", 
    "> downloading podcasts...\n", 
    "> grabbing a spicy with...\n", 
    "> welcome to bar... "
  ];

  useEffect(() => {

    var stringIndex = 0;
    var aString = "";

    var intervalId = setInterval(() => {
      aString += loadingMessageStrings[stringIndex];
      setCurMessageString(aString)

      if (stringIndex < loadingMessageStrings.length - 1) {
        stringIndex += 1;
      }
      else {
        setInterval(() => {
          setShowCursor((x) => !x);
        }, BLINK_INTERVAL);
        clearInterval(intervalId);
      }

    }, TEXT_DISPLAY_INTERVAL);

  }, []);

  function renderDataFetchingText() {
    var text = curMessageString;
    text += (showCursor) ? "|" : "";
    return text;
  }

  return (
    <View style={styles.loadingContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          { loadingError 
            ? "LOADING ERROR"
            : renderDataFetchingText()
          }
        </Text>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  loadingContainer: {
    display: "flex",
    alignItems: "center", 
    position: "absolute", 
    height: "100%", 
    width: "100%", 
    backgroundColor: "#F5ECD5",
  }, 
  textContainer: {
    marginTop: "10%",
    width: "94%",
  }, 
  textStyle: {
    fontSize: 18,
    lineHeight: 32,
  }
});

export default Loading;

