import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Loading = ({ loadingError }) => {

  function renderDataFetchingText() {
    // return "Fetching data...";
    return `
    > initializing groovy beats...
    > loading the best DJs...
    > downloading podcasts...
    > grabbing a spicy with...
    > welcome to bar...
    `;
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
        <View class="loader"></View>
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

