import { StyleSheet } from "react-native";
import { Platform, StatusBar } from "react-native";
import { home_styles } from "./home";

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  home_styles,
});

export default styles;
