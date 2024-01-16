import React, { FC } from "react";
import { View, StyleSheet, Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import COLORS from "./Utilities/colors";

interface DropdownProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: { label: string; value: string }[];
}

const Dropdown: FC<DropdownProps> = ({
  selectedValue,
  onValueChange,
  items,
}) => {
  console.log("Dropdown Props:", selectedValue, items);

  return (
    <View style={styles.dropdownContainer}>
      <RNPickerSelect
        value={selectedValue}
        onValueChange={onValueChange}
        items={items}
        style={pickerSelectStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.CONTAINER,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 18 : 10,
    marginVertical: 10,
    backgroundColor: COLORS.CONTAINER,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});

export default Dropdown;
