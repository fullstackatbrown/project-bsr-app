import React, {useState} from 'react';
import { View, Text } from 'react-native';
import ScheduleCard from './ScheduleCard';
import { globalStyles } from '../../styles/global';

// TODO
const Schedule = () => {
  const loremIpsum = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ";
  const dummyData = [
    {time: "8-9PM ET", host: "Caitlin Pintavorn", show: "Flip Side", about: loremIpsum}, 
    {time: "9-10PM ET", host: "Ricky hage, calista shang", show: "TBH", about: loremIpsum}]

  const [data, setData] = useState(dummyData);

  return (
    <View style={globalStyles.container}>

      <Text style={globalStyles.h1}>> SHOW SCHEDULE</Text>

      { data.map((value, index) => {
        return <ScheduleCard 
          key={index}
          time={value.time} 
          host={value.host} 
          show={value.show}
          about={value.about}
        />
      })}

    </View>
  );
};

export default Schedule;
