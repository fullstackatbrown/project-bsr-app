import React, {useState} from 'react';
import { ScrollView, View, Text } from 'react-native';
import ScheduleCard from './ScheduleCard';
import DropDown from './DropDown';
import { globalStyles } from '../../styles/global';

// TODO
const Schedule = () => {
  const loremIpsum = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ";
  const dummyDayData = [
    {time: "8-9PM ET", host: "Caitlin Pintavorn", show: "Flip Side", about: loremIpsum}, 
    {time: "9-10PM ET", host: "Ricky hage, calista shang", show: "TBH", about: loremIpsum}]

  const daysData = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const dummyData = daysData.map((value, index) => {
    var dayData = [];
    var placeholder = {time: `8-9PM ET (${value})`, host: "Caitlin Pintavorn", show: "Flip Side", about: loremIpsum};

    for(var i = 0; i < index + 1; i++){
      dayData.push(placeholder);
    }
    return dayData;
  });

  const [data, setData] = useState(dummyData);
  const [day, setDay] = useState(0);

  const pickerItems = daysData.map((value, index) => {
    return { label: daysData[index], value: index, key: index };
  });

  return (
    <ScrollView>
      <View style={globalStyles.container}>

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
            host={value.host} 
            show={value.show}
            about={value.about}
          />
        })}

      </View>
    </ScrollView>
  );
};

export default Schedule;
