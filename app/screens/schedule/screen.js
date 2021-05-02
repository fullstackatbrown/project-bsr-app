import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ScheduleCard from './ScheduleCard';
import DropDown from './DropDown';
import { globalStyles } from '../../styles/global';

import { DataContext } from '../../src/DataContext';

// TODO
const Schedule = () => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const dummyData = dayNames.map((value, index) => {
    var dayData = [];
    var placeholder = {time: `8-9PM ET (${value})`, host: "N/A", show: "Flip Side", about: "hello"};
    for(var i = 0; i < index + 1; i++){
      dayData.push(placeholder);
    }
    return dayData;
  });

  const [data, setData] = useState(dummyData);
  const [day, setDay] = useState(0);
  const currentAppData = useContext(DataContext);

  useEffect(() => {
    const _dummyData = dayNames.map((value, index) => {
      var dayData = [];
      currentAppData.showData.items.forEach((aShow) => {
        // format: 2021-05-05T22:00:00+0000
        let startTimeString = aShow.start.slice(0, (aShow.start.length - 2)) + ":" + aShow.start.slice(aShow.start.length - 2);
        let startTime = new Date(startTimeString);
        if (startTime.getDay() !== index) {
          return;
        }

        let endTimeString = aShow.end.slice(0, (aShow.end.length - 2)) + ":" + aShow.end.slice(aShow.end.length - 2);
        let endTime = new Date(endTimeString);

        let timezone = startTime.toString().match(/\(([A-Za-z\s].*)\)/)[1];
        let startString = startTime.toLocaleString('en-US', { hour: 'numeric', hour12: true })
        let endString = endTime.toLocaleString('en-US', { hour: 'numeric', hour12: true })
        
        var placeholder = {
          time: `${startString}-${endString} ${timezone}`, 
          hostLinks: aShow["_links"].personas, 
          show: aShow.title, 
          about: aShow.description
        };
        dayData.push(placeholder);

      });
      return dayData;
    });
    setData(_dummyData);
  }, [currentAppData.showData])

  const pickerItems = dayNames.map((value, index) => {
    return { label: dayNames[index], value: index, key: index };
  });

  return (
    <ScrollView>
      <View style={styles.centeringContainer}>

        <Text style={globalStyles.h1}>>&nbsp;&nbsp;SHOW SCHEDULE</Text>

        <DropDown 
          setOption={setDay}
          itemData={pickerItems}
          dropdownStyle={globalStyles.dropdownStyle}
        />

        { data[day].map((value, index) => {
          return <ScheduleCard 
            key={index}
            time={value.time} 
            hostLinks={value.hostLinks} 
            show={value.show}
            about={value.about}
          />
        })}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeringContainer: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: '5%'
  }
});

export default Schedule;
