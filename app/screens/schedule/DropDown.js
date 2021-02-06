import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { globalStyles } from '../../styles/global';
import { MaterialIcons } from '@expo/vector-icons';

const DropDown = (props) => {
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: props.dropdownStyle, 
    inputAndroid: props.dropdownStyle
  });

  return (
    <View style={globalStyles.dropdownContainer}>

      <RNPickerSelect
        placeholder={{}}
        style={pickerSelectStyles}
        items={props.itemData}
        onValueChange={(value) => props.setOption(value)}
        Icon={() => <MaterialIcons name={"arrow-drop-down"} size={28} color={"white"}/>}
      />

    </View>
  );
};

export default DropDown;
