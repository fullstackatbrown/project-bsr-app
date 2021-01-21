import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/global';

const ScheduleCard = ({time, host, show, about}) => {

  const [showAll, setShowAll] = useState(false);

  function toggleCollapse(){
    setShowAll(!showAll);
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.timeContainer}>
        <Text style={globalStyles.h2}>{time}</Text>
      </View>

      <Text>
        <Text style={globalStyles.headline}>Host: </Text>{host}
      </Text>

      <Text>
        <Text style={globalStyles.headline}>Show: </Text>{show}
      </Text>

      <Text numberOfLines={showAll ? 0 : 3}>
        <Text style={globalStyles.headline}>About: </Text>{about}
      </Text>

      <View style={styles.toggleButtonContainer}>
        <MaterialIcons name={showAll ? 'expand-less' : 'expand-more'} size={40} onPress={toggleCollapse} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: "2%", 
    borderColor: "black", 
    borderTopWidth: 1.4, 
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
