import { Image, StyleSheet, Platform, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Welcome! Bài tập 1
          <HelloWave />
        </ThemedText>
        <Text style={{ color: "#ccc", fontSize: 16 }}>
          By 21522436 - Nguyễn Thị Hồng Nhung
        </Text>
      </ThemedView>

      <Link href="/bt1/login" style={styles.buttonLink}>
        Trang đăng nhập
      </Link>
      <Link href="/bt1/register" style={styles.buttonLink}>Trang đăng ký</Link>
      <Link href="/bt1/calc" style={styles.buttonLink}>Máy tính Calculator</Link>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  buttonLink: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1, 
    borderColor: 'black', 
  },
  titleContainer: {
    flexDirection: "column",
    // alignItems: 'start',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
