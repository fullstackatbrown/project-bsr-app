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

  return (
    <View style={styles.header}>
      <View style={styles.openMenuContainer}>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      </View>
      <View style={styles.modeControlContainer}>
        <MaterialIcons name='wb-sunny' size={24} style={styles.icon} />
        <Switch
          trackColor={{ false: "white", true: "white" }}
          thumbColor={switchMode ? "black" : "#f4f3f4"}
          ios_backgroundColor="black"
          onValueChange={toggleSwitch}
          value={switchMode}
          style={styles.modeSwitch}
        />
        <MaterialIcons name='nights-stay' size={24} style={styles.icon} />
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
  openMenuContainer: {
    marginLeft: 20,
  }, 
  modeControlContainer: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  modeSwitch: {
    transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }],
  }
});

export default Header;
