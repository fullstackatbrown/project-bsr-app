import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StreamStack from './streamStack';
import ScheduleStack from './scheduleStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
	return (
		<Drawer.Navigator drawerStyle={styles.drawer}>
          <Drawer.Screen name="Stream" component={StreamStack} />
          <Drawer.Screen name="Schedule" component={ScheduleStack} />
          <Drawer.Screen name="About" component={AboutStack} />
		</Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
  drawer: {
		width: '100%',
		// TODO
  },
});

export default RootDrawer;
