import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StreamStack from './streamStack';
import ScheduleStack from './scheduleStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
	return (
      <Drawer.Navigator drawerStyle={styles.drawer} drawerContentOptions={drawerContentOptions}>
        <Drawer.Screen drawerStyle={styles.drawerBar} name=">&nbsp; LIVESTREAM" component={StreamStack} />
        <Drawer.Screen name=">&nbsp; SHOW SCHEDULE" component={ScheduleStack} />
        <Drawer.Screen name=">&nbsp; ABOUT BSR" component={AboutStack} />
      </Drawer.Navigator>
	);
};

const styles = StyleSheet.create({
  drawer: {
    width: '100%',
    backgroundColor: "#F5ECD5",
    paddingTop: '20%'
  }
});

const drawerContentOptions = {
  itemStyle: { 
    marginVertical: 8, 
    marginHorizontal: 20 
  },
  labelStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
}

export default RootDrawer;
