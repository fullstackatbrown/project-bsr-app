import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../screens/about/screen';
import Header from '../shared/header';

const Stack = createStackNavigator();

const options = ({ navigation }) => {
  return ({
    header: () => <Header navigation={navigation} />
  });
};

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} options={options} />
    </Stack.Navigator>
  );
};

export default AboutStack;