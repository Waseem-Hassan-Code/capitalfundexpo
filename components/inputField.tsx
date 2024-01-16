import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  Platform,
} from "react-native";
import React from "react";
import COLORS from "./Utilities/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface InputFieldProps extends TextInputProps {
  icon?: any;
  placeholder: string;
  textType?: "text" | "password";
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  icon,
  placeholder,
  textType = "text",
  error,
  ...props
}) => {
  const containerStyle = [
    styles.inputContainer,
    error ? { borderColor: COLORS.ERROR } : null,
  ];

  const iconStyle = [styles.iconStyle, error ? { color: COLORS.ERROR } : null];

  return (
    <View style={containerStyle}>
      {icon && <MaterialCommunityIcons name={icon} style={iconStyle} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={textType === "password"}
        {...props}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.CONTAINER,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 18 : 10,
    marginVertical: 10,
    backgroundColor: COLORS.CONTAINER,
  },
  iconStyle: {
    color: COLORS.DARK,
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.DARK,
  },
});
