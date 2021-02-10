import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Loading = ({ loadingError }) => {

  return (
    <View style={styles.loadingContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          { loadingError 
            ? "LOADING ERROR"
            : "Fetching data..."
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
    justifyContent: "center", 
    alignItems: "center", 
    position: "absolute", 
    height: "100%", 
    width: "100%", 
  }, 
  textContainer: {
    paddingVertical: "38%", 
    // paddingHorizontal: "10%", 
    width: "90%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center", 

    borderRadius: 20, 
    borderWidth: 3,
    borderColor: "#68B39E", 
    backgroundColor: "#F5ECD5",
  }, 
  textStyle: {
    fontSize: 36,
    fontWeight: "bold",
  }
});

export default Loading;

