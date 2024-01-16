import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "./Utilities/colors";

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

export default function AppButton({
  title,
  onPress,
  color = COLORS.PRIMARY,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: COLORS.WHITE,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
