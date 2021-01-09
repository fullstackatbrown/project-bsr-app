import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StreamScreen from '../screens/stream/screen';
import Header from '../shared/header';

const Stack = createStackNavigator();

const options = ({ navigation }) => {
  return ({
    header: () => <Header navigation={navigation} />
  });
};

const StreamStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stream" component={StreamScreen} options={options} />
    </Stack.Navigator>
  );
};

export default StreamStack;