import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  CheckBox,
} from "react-native";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function Example() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0c1c2c" }}>
      <View style={styles.container}>
        {/* <KeyboardAwareScrollView> */}
        <View style={styles.header}>
          <Text style={styles.title}>
            Đăng nhập vào <Text style={{ color: "#c0e863" }}>Ứng dụng</Text>
          </Text>
          <Text style={styles.subtitle}>Chào mừng quay trở lại!</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>
          <Text style={styles.formLink}>Forgot password?</Text>
          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              value={rememberMe}
              onValueChange={(newValue) => setRememberMe(newValue)}
            /> 
            <Text style={styles.formCheckBox}>{' '} Renember me?</Text>
          </View>
        </View>
        {/* </KeyboardAwareScrollView> */}
        <TouchableOpacity
          onPress={() => {
            // handle link
          }}
          style={{ marginTop: "auto" }}
        >
          <Text style={styles.formFooter}>
            Don't have an account?{" "}
            <Link
              href={"/register"}
              style={{ textDecorationLine: "underline" }}
            >
              Sign up
            </Link>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#ccc",
  },
  /** Header */
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 36,
    backgroundColor: "#0c1c2c",
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "#fff",
    paddingTop: 12,
    // display: "flex",
    // justifyContent: "center",
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formLink: {
    fontSize: 16,
    fontWeight: "600",
    color: "#74a224",
    textAlign: "right",
  },
  formCheckBox: {
    fontSize: 16,
    fontWeight: "600",
    color: "#74a224",
    textAlign: "left",
  },
  formFooter: {
    fontSize: 15,
    fontWeight: "600",
    color: "#ccc",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
    borderWidth: 1,
    borderColor: "#C9D3DB",
    borderStyle: "solid",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#c0e863",
    borderColor: "#c0e863",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#0c1c2c",
  },
});
