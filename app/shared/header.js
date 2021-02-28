import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme, ThemeContext } from '../ThemeContext';

const Header = ({ navigation }) => {

  const openMenu = () => {
    navigation.openDrawer();
  };
  const themeToggle = useTheme();
  const currentTheme = useContext(ThemeContext);

  const [switchMode, setSwitchMode] = useState(false);

  function toggleSwitch() {
    themeToggle.toggleMode();
    setSwitchMode(x => !x);
  }

  const toggleMode = () => {
    // navigation.openDrawer();
  };

  return (
    <View style={headerStyles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={headerStyles.menuIcon} />
      <View style={headerStyles.toggleModeContainer}>
        <MaterialIcons name='wb_sunny' size={24} />
        <MaterialIcons name='toggle_off' size={24} onPress={toggleMode} />
        <MaterialIcons name='nights_stay' size={24} />
      </View>
      
      <Text>Header (in shared/header.js)</Text>
    </View>
  );
};

export const headerStyles = StyleSheet.create({
  // TODO
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  openMenuContainer: {
    marginLeft: 20,
  }, 
  modeControlContainer: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  menuIcon: {
    position: 'absolute',
    left: 16,
  },
  // https://stackoverflow.com/questions/55258987/place-3-image-icons-in-a-row-in-react-native
  toggleModeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    right: '5%'
  },
  
});

export default Header;
