import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ navigation }) => {

  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <View style={styles.openMenuContainer}>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      </View>
      <View style={styles.modeControlContainer}>
        <MaterialIcons name='wb-sunny' size={28} style={styles.icon} />
        <MaterialIcons name='toggle-off' size={30} style={styles.icon} />
        <MaterialIcons name='nights-stay' size={28} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 2
  },
  openMenuContainer: {
    marginLeft: 20,
  }, 
  modeControlContainer: {
    marginRight: 20,
    flexDirection: 'row',
  }
});

export default Header;
