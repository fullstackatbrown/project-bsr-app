import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScheduleScreen from '../screens/schedule/screen';
import Header from '../shared/header';

const Stack = createStackNavigator();

const options = ({ navigation }) => {
  return ({
    header: () => <Header navigation={navigation} />
  });
};

const ScheduleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Schedule" component={ScheduleScreen} options={options} />
    </Stack.Navigator>
  );
};

export default ScheduleStack;