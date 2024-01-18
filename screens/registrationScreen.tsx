import React from "react";
import { StyleSheet, Image, Platform, View } from "react-native";
import { Formik } from "formik";
import Screen from "../components/Screen";
import registrationValidation from "../yupValidations/rigistrationScreen";
import InputField from "../components/inputField";
import AppButton from "../components/AppButton";
import Dropdown from "../components/DropDown";
import COLORS from "../components/Utilities/colors";

export default function RegistrationScreen() {
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: "",
        }}
        validationSchema={registrationValidation}
        onSubmit={(values) => {
          console.log("Form submitted with values:", values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          touched,
          values,
        }) => (
          <>
            <InputField
              icon="account"
              placeholder="Full Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              textContentType="name"
              autoCapitalize="none"
              error={touched.name && errors.name}
            />

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

            <View style={styles.dropdownContainer}>
              <Dropdown
                selectedValue={values.gender}
                onValueChange={handleChange("gender")}
                items={genderOptions}
              />
            </View>

            <AppButton
              color={COLORS.PRIMARY}
              title="Register"
              onPress={handleSubmit}
            />
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
    ...Platform.select({
      ios: {
        paddingHorizontal: 10,
      },
      android: {
        paddingHorizontal: 10,
      },
    }),
  },
  dropdownContainer: {
    marginBottom: 20,
  },
});
