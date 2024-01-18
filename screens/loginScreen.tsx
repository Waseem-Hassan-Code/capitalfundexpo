import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import InputField from "../components/inputField";
import AppButton from "../components/AppButton";
import COLORS from "../components/Utilities/colors";
import { Formik } from "formik";
import loginValidation from "../yupValidations/loginScreen";
import ActivityIndicator from "../components/ActivityIndicator";

export default function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidation}
        onSubmit={(values) => {
          console.log("Form submitted with values:", values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched }) => (
          <>
            <InputField
              icon="email"
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              error={touched.email && errors.email}
            />

            <InputField
              icon="lock"
              placeholder="Password"
              autoCorrect={false}
              textType="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              error={touched.password && errors.password}
            />

            <AppButton
              color={COLORS.PRIMARY}
              title="Login"
              onPress={handleSubmit}
            />

            <TouchableOpacity
              style={{ marginTop: 10, alignItems: "center" }}
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={{ color: "#1a2c32", fontSize: 17 }}>
                Don't have an account?{"  "}
                <Text
                  style={{
                    color: "#39938f",
                    fontWeight: "700",
                  }}
                >
                  Click here
                </Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 100,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  screen: {
    paddingHorizontal: 10,
  },
});
